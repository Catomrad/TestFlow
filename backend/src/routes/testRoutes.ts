import express, { RequestHandler, Router } from 'express';

import { authenticateToken } from '../middleware/authMiddleware';
import { createTestCase } from '../controllers/caseController';
import { createTestPlan } from '../controllers/planController';

const router = Router();

router.post(
  '/test-plan/new',
  authenticateToken as RequestHandler,
  createTestPlan as RequestHandler
);
router.post(
  '/test-case/new',
  authenticateToken as RequestHandler,
  createTestCase as RequestHandler
);

export default router;
