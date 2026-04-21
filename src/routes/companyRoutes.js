// routes/companyRoutes.js
import express from 'express';
const router = express.Router();
import {
  getCompanies,
  getCompanyById,
  getCompaniesBySector,
  searchCompanies,
  getCompanyInvestments,
  createCompany,
  updateCompany,
  deleteCompany
} from '../controllers/companyController.js';
import { detectLanguage } from '../middleware/languageMiddleware.js';
import { responseFilter } from '../middleware/responseFilter.js';

// Apply language detection to all routes
router.use(detectLanguage);

// Apply response filter to all routes (important: after detection)
router.use(responseFilter);

// ========== PUBLIC ROUTES ==========
router.get('/', getCompanies);
router.get('/search/:query', searchCompanies);
router.get('/sector/:sectorName', getCompaniesBySector);
router.get('/:id/investments', getCompanyInvestments);
router.get('/:id', getCompanyById);
// ==========  ROUTES ==========

// ========== ADMIN ROUTES ==========
router.post('/', createCompany);
router.put('/:id', updateCompany);
router.delete('/:id', deleteCompany);

export default router;