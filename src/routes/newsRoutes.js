import express from 'express';
import newsUpload from '../middleware/newsUpload.js';
import {
  createNews,
  getAllNews,
  getFeaturedNews,
  getRelatedNews,
  getNewsById,
  updateNews,
  deleteNews,
} from '../controllers/newsController.js';

const router = express.Router();

// ── Special / advanced routes (must be before /:slug to avoid conflicts) ─────

/**
 * GET /api/news/featured
 * Returns isFeatured=true news, sorted newest first.
 * Query: ?limit=5
 */
router.get('/featured', getFeaturedNews);

/**
 * GET /api/news/related/:category
 * Returns news from the same category.
 * Query: ?limit=5&exclude=<id>
 */
router.get('/related/:category', getRelatedNews);

// ── Core CRUD ─────────────────────────────────────────────────────────────────

/**
 * GET /api/news
 * List all news with pagination, filtering, and search.
 * Query: ?page=1&limit=10&category=news&search=keyword&sort=-createdAt
 */
router.get('/', getAllNews);

/**
 * POST /api/news
 * Create a new news item with optional image upload.
 * Fields (multipart/form-data): title, summary, content, category, isFeatured
 * Files: image (single), images (multiple)
 */
router.post(
  '/',
  newsUpload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'images', maxCount: 10 },
  ]),
  createNews
);

/**
 * GET /api/news/:id
 * Get full news item by ID.
 */
router.get('/:id', getNewsById);

/**
 * PUT /api/news/:id
 * Update a news item by MongoDB _id.
 * Supports image replacement via multipart/form-data.
 */
router.put(
  '/:id',
  newsUpload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'images', maxCount: 10 },
  ]),
  updateNews
);

/**
 * DELETE /api/news/:id
 * Delete a news item by MongoDB _id.
 */
router.delete('/:id', deleteNews);

export default router;
