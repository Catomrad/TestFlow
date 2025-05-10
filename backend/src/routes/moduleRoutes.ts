import {
  createModule,
  deleteModule,
  editModule,
  getAllModules,
  getModuleById,
} from '../controllers/moduleController';
import express, { RequestHandler } from 'express';

import { authenticateToken } from '../middleware/authMiddleware';

const router = express.Router();

router.post(
  '/new',
  authenticateToken as RequestHandler,
  createModule as RequestHandler
);
router.get(
  '/',
  authenticateToken as RequestHandler,
  getAllModules as RequestHandler
);
router.get(
  '/:id',
  authenticateToken as RequestHandler,
  getModuleById as RequestHandler
);
router.patch(
  '/edit/:id',
  authenticateToken as RequestHandler,
  editModule as RequestHandler
);
router.delete(
  '/:id',
  authenticateToken as RequestHandler,
  deleteModule as RequestHandler
);

export default router;
