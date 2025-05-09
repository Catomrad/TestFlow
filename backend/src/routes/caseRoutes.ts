import {
  createTestCase,
  deleteTestCase,
  editTestCase,
  getAllTestCases,
  getTestCaseById,
} from '../controllers/caseController';
import express, { RequestHandler } from 'express';

import { authenticateToken } from '../middleware/authMiddleware';

const router = express.Router();

router.get(
  '/',
  authenticateToken as RequestHandler,
  getAllTestCases as RequestHandler
);
router.get(
  '/:id',
  authenticateToken as RequestHandler,
  getTestCaseById as RequestHandler
);
router.post(
  '/new',
  authenticateToken as RequestHandler,
  createTestCase as RequestHandler
);
router.patch(
  '/edit/:id',
  authenticateToken as RequestHandler,
  editTestCase as RequestHandler
);
router.delete(
  '/:id',
  authenticateToken as RequestHandler,
  deleteTestCase as RequestHandler
);

export default router;
