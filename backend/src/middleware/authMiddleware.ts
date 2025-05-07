import { NextFunction, Request, Response } from 'express';

import { config } from 'dotenv';
import jwt from 'jsonwebtoken';

interface UserPayload {
  id: string;
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

config();

const JWT_SECRET = process.env.JWT_SECRET;

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, JWT_SECRET as string, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user as UserPayload;
    next();
  });
};

export { authenticateToken };
