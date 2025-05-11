import {
  createEdge,
  createNode,
  deleteEdge,
  deleteNode,
  getDiagram,
  updateNode,
} from '../controllers/diagramController';
import express, { RequestHandler } from 'express';

import { authenticateToken } from '../middleware/authMiddleware';

const router = express.Router();

router.post(
  '/new-edge',
  authenticateToken as RequestHandler,
  createEdge as RequestHandler
);
router.post(
  '/new-node',
  authenticateToken as RequestHandler,
  createNode as RequestHandler
);
router.get(
  '/',
  authenticateToken as RequestHandler,
  getDiagram as RequestHandler
);
router.patch(
  '/edit/:id',
  authenticateToken as RequestHandler,
  updateNode as RequestHandler
);
router.delete(
  '/node/:id',
  authenticateToken as RequestHandler,
  deleteNode as RequestHandler
);
router.delete(
  '/edge/:id',
  authenticateToken as RequestHandler,
  deleteEdge as RequestHandler
);

export default router;
