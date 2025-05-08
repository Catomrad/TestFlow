import { NextFunction, Request, Response } from 'express';

import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

interface UserPayload {
  id: number;
  role: string;
  membershipRole?: string;
}

interface AuthRequest extends Request {
  user?: UserPayload;
}

const authenticateToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as UserPayload;
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Error in authenticateToken:', error);
    res.status(403).json({ message: 'Invalid token' });
  }
};

export { authenticateToken };
