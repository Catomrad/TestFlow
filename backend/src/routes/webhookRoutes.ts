import {
  createWebhook,
  deleteWebhook,
  getWebhooks,
  updateWebhook,
} from '../controllers/webhookController';
import express, { RequestHandler } from 'express';

import { authenticateToken } from '../middleware/authMiddleware';

const router = express.Router();

router.post(
  '/new',
  authenticateToken as RequestHandler,
  createWebhook as RequestHandler
);
router.get(
  '/',
  authenticateToken as RequestHandler,
  getWebhooks as RequestHandler
);
router.patch(
  '/edit/:id',
  authenticateToken as RequestHandler,
  updateWebhook as RequestHandler
);
router.delete(
  '/:id',
  authenticateToken as RequestHandler,
  deleteWebhook as RequestHandler
);

export default router;
