import {
  createProject,
  getProjects,
  inviteUser,
} from '../controllers/projectController';
import express, { RequestHandler } from 'express';

import { authenticateToken } from '../middleware/authMiddleware';

const router = express.Router();

router.get(
  '/',
  authenticateToken as RequestHandler,
  getProjects as RequestHandler
);
router.post(
  '/',
  authenticateToken as RequestHandler,
  createProject as RequestHandler
);
router.post(
  '/invite',
  authenticateToken as RequestHandler,
  inviteUser as RequestHandler
);

export default router;
