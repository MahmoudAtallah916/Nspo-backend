// routes/sectorRoutes.js
import express from 'express';
const router = express.Router();
import {
  getAllSectors,
  getSectorsByLanguage,
  getSectorsSummary,
  getSectorsWithCounts,
  getSectorById,
  getSectorStats,
  searchSectors
} from '../controllers/companyController.js';
import { detectLanguage } from '../middleware/languageMiddleware.js';

// Apply language detection
router.use(detectLanguage);

// ========== SECTOR ROUTES ==========

// Get all sectors with companies in all languages
router.get('/all', getAllSectors);

// Get sectors by language (using query param)
router.get('/', getSectorsByLanguage);

// Get sectors summary (just names and counts)
router.get('/summary', getSectorsSummary);

// Get sectors with company counts in specific language
router.get('/with-counts', getSectorsWithCounts);

// Get sector statistics
router.get('/stats', getSectorStats);

// Search sectors by name
router.get('/search/:query', searchSectors);

// Get specific sector by ID
router.get('/:sectorId', getSectorById);

export default router;