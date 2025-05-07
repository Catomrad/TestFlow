import { Request, Response } from 'express';

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

interface RegisterRequest {
  username: string;
  password: string;
  role: 'admin' | 'user';
  projectName?: string;
}

interface LoginRequest {
  username: string;
  password: string;
}

interface UserPayload {
  id: number;
  role: string;
}

// Расширяем тип Request для включения пользователя
declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}

const registerUser = async (req: Request, res: Response) => {
  const { username, password, role, projectName } = req.body as RegisterRequest;

  if (!username || !password || !['admin', 'user'].includes(role)) {
    return res.status(400).json({ message: 'Invalid input' });
  }
  if (role === 'admin' && !projectName) {
    return res.status(400).json({ message: 'Project name required for admin' });
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    let user;

    if (role === 'admin' && projectName) {
      // Используем правильный синтаксис для транзакций Prisma
      user = await prisma.$transaction(async (tx: any) => {
        const newUser = await tx.user.create({
          data: { username, password: hashedPassword, role },
        });
        
        const project = await tx.project.create({
          data: {
            name: projectName || 'Default Project', // Убедимся, что имя проекта всегда определено
            createdById: newUser.id,
          },
        });
        
        await tx.projectMember.create({
          data: {
            userId: newUser.id,
            projectId: project.id,
            role: 'admin',
          },
        });
        
        return newUser;
      });
    } else {
      user = await prisma.user.create({
        data: { username, password: hashedPassword, role },
      });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ 
      token, 
      user: { id: user.id, username: user.username, role: user.role } 
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body as LoginRequest;

  try {
    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ 
      token, 
      user: { id: user.id, username: user.username, role: user.role } 
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId }, // ID должен быть числом, согласно схеме Prisma
      select: { id: true, username: true, role: true },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export { registerUser, loginUser, getCurrentUser };
