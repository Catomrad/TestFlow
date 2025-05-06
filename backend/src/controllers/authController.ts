const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;

const registerUser = async (req, res) => {
  const { username, password, role, projectName } = req.body;

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

    if (role === 'admin') {
      user = await prisma.$transaction(async (prisma) => {
        const newUser = await prisma.user.create({
          data: { username, password: hashedPassword, role },
        });
        const project = await prisma.project.create({
          data: {
            name: projectName,
            createdById: newUser.id,
          },
        });
        await prisma.projectMember.create({
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
    res.json({ token, user: { id: user.id, username: user.username, role: user.role } });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

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
    res.json({ token, user: { id: user.id, username: user.username, role: user.role } });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getCurrentUser = async (req, res) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
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

module.exports = { register: registerUser, login: loginUser, getCurrent: getCurrentUser };