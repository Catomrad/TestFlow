import express, { RequestHandler, Router } from 'express';
import {
  getCurrentUser,
  loginUser,
  registerUser,
} from '../controllers/authController';

import { authenticateToken } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/register', registerUser as RequestHandler);
router.post('/login', loginUser as RequestHandler);
router.get(
  '/me',
  authenticateToken as RequestHandler,
  getCurrentUser as RequestHandler
);

export default router;
