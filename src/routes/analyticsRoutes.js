import express from 'express';
import {
  getAnalyticsEndpoints,
  getAnalyticsSummary,
} from '../controllers/analyticsController.js';

const router = express.Router();

router.get('/summary', getAnalyticsSummary);
router.get('/endpoints', getAnalyticsEndpoints);

export default router;

