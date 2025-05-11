import {
  createBugReport,
  deleteBugReport,
  editBugReport,
  getAllBugReports,
  getBugReportById,
} from '../controllers/bugReportController';
import express, { RequestHandler } from 'express';

import { authenticateToken } from '../middleware/authMiddleware';

const router = express.Router();

router.get(
  '/',
  authenticateToken as RequestHandler,
  getAllBugReports as RequestHandler
);
router.get(
  '/:id',
  authenticateToken as RequestHandler,
  getBugReportById as RequestHandler
);
router.post(
  '/new',
  authenticateToken as RequestHandler,
  createBugReport as RequestHandler
);
router.patch(
  '/edit/:id',
  authenticateToken as RequestHandler,
  editBugReport as RequestHandler
);
router.delete(
  '/:id',
  authenticateToken as RequestHandler,
  deleteBugReport as RequestHandler
);

export default router;
