import {
  completeTestRun,
  createTestRun,
  deleteTestRun,
  editTestRun,
  getAllTestRuns,
  getTestRunById,
  startTestRun,
} from '../controllers/testRunController';
import express, { RequestHandler } from 'express';

import { authenticateToken } from '../middleware/authMiddleware';

const router = express.Router();

router.get(
  '/',
  authenticateToken as RequestHandler,
  getAllTestRuns as RequestHandler
);
router.get(
  '/:id',
  authenticateToken as RequestHandler,
  getTestRunById as RequestHandler
);
router.post(
  '/new',
  authenticateToken as RequestHandler,
  createTestRun as RequestHandler
);
router.patch(
  '/edit/:id',
  authenticateToken as RequestHandler,
  editTestRun as RequestHandler
);
router.delete(
  '/:id',
  authenticateToken as RequestHandler,
  deleteTestRun as RequestHandler
);
router.post(
  '/start/:id',
  authenticateToken as RequestHandler,
  startTestRun as RequestHandler
);
router.post(
  '/complete/:id',
  authenticateToken as RequestHandler,
  completeTestRun as RequestHandler
);

export default router;
