import express from 'express';
const router = express.Router();
import {
  getInvestments,
  getFeaturedInvestments,
  getInvestmentById,
  createInvestment,
  updateInvestment,
  deleteInvestment
} from '../controllers/investmentController.js';
import { detectLanguage } from '../middleware/languageMiddleware.js';
import { authAdmin } from '../middleware/auth.js';
import { uploadInvestmentImage } from '../middleware/investmentUpload.js'; // Middleware الخاص بالاستثمار

router.use(detectLanguage);

// Public routes
router.get('/', getInvestments);
router.get('/featured', getFeaturedInvestments);
router.get('/:id', getInvestmentById);

// Admin routes
router.post(
  '/',
  authAdmin,
  uploadInvestmentImage.single('image'), // صورة الاستثمار
  createInvestment
);

router.put(
  '/:id',
  authAdmin,
  uploadInvestmentImage.single('image'), // لتحديث الصورة لو حبيت
  updateInvestment
);

router.delete('/:id', authAdmin, 
  deleteInvestment);

export default router;