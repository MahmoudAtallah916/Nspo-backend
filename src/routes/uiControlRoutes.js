import express from 'express';
import {
  getUIControls,
  getUIControlByKey,
  createUIControl,
  updateUIControl,
} from '../controllers/uiControlController.js';
import { authAdmin } from '../middleware/auth.js';

const router = express.Router();

// GET /api/ui-controls
router.get('/', getUIControls);

// GET /api/ui-controls/:key
router.get('/:key', getUIControlByKey);

// POST /api/ui-controls
router.post('/', authAdmin, createUIControl);

// PATCH /api/ui-controls/:key
router.patch('/:key', authAdmin, updateUIControl);

export default router;
