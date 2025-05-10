import {
  createTestPlan,
  deleteTestPlan,
  editTestPlan,
  getAllTestPlans,
  getTestPlanById,
} from '../controllers/planController';
import express, { RequestHandler } from 'express';

import { authenticateToken } from '../middleware/authMiddleware';

const router = express.Router();

router.post(
  '/new',
  authenticateToken as RequestHandler,
  createTestPlan as RequestHandler
);
router.get(
  '/',
  authenticateToken as RequestHandler,
  getAllTestPlans as RequestHandler
);
router.get(
  '/:id',
  authenticateToken as RequestHandler,
  getTestPlanById as RequestHandler
);
router.patch(
  '/edit/:id',
  authenticateToken as RequestHandler,
  editTestPlan as RequestHandler
);
router.delete(
  '/:id',
  authenticateToken as RequestHandler,
  deleteTestPlan as RequestHandler
);

export default router;
