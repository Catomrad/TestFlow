import {
  createProject,
  deleteProject,
  getProjectById,
  getProjectMembers,
  getProjects,
  inviteMember,
  leaveProject,
  removeMember,
  updateProject,
} from '../controllers/projectController';
import express, { RequestHandler } from 'express';

import { authenticateToken } from '../middleware/authMiddleware';

const router = express.Router();

console.log('Projects routes loaded'); // Для отладки

router.get(
  '/:id',
  authenticateToken as RequestHandler,
  getProjectById as RequestHandler
);
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
  '/invite-member',
  authenticateToken as RequestHandler,
  inviteMember as RequestHandler
);
router.post(
  '/remove-member',
  authenticateToken as RequestHandler,
  removeMember as RequestHandler
);
router.post(
  '/leave',
  authenticateToken as RequestHandler,
  leaveProject as RequestHandler
);
router.patch(
  '/:id',
  authenticateToken as RequestHandler,
  updateProject as RequestHandler
);
router.delete(
  '/:id',
  authenticateToken as RequestHandler,
  deleteProject as RequestHandler
);
router.get(
  '/members',
  authenticateToken as RequestHandler,
  getProjectMembers as RequestHandler
); // Новый маршрут

export default router;
