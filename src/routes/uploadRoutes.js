// routes/uploadRoutes.js
import express from 'express';
const router = express.Router();
import { uploadPDF } from '../middleware/upload.js';
import { authAdmin } from '../middleware/auth.js'; // استيراد middleware الـ admin
import {
  uploadProductsPDF,
  uploadOpportunitiesPDF,
  uploadCompanyPDF,
  getProductsPDF,
  getOpportunitiesPDF,
  deleteProductsPDF,
  deleteOpportunitiesPDF
} from '../controllers/uploadController.js';

// ========== PUBLIC ROUTES (لا تحتاج تسجيل دخول) ==========
router.get('/company/:companyId/products-pdf', getProductsPDF);
router.get('/company/:companyId/opportunities-pdf', getOpportunitiesPDF);

// ========== ADMIN ONLY ROUTES (تحتاج أدمن) ==========

// Upload products PDF - أدمن فقط
router.post(
  '/company/:companyId/products-pdf', 
  authAdmin,           // التحقق من أن المستخدم أدمن
  uploadPDF.single('pdf'), 
  uploadProductsPDF
);

// Upload opportunities PDF - أدمن فقط
router.post(
  '/company/:companyId/opportunities-pdf', 
  authAdmin, 
  uploadPDF.single('pdf'), 
  uploadOpportunitiesPDF
);

// Upload PDF with type in body - أدمن فقط
router.post(
  '/company/:companyId/pdf', 
  authAdmin, 
  uploadPDF.single('pdf'), 
  uploadCompanyPDF
);

// Delete products PDF - أدمن فقط
router.delete(
  '/company/:companyId/products-pdf', 
  authAdmin, 
  deleteProductsPDF
);

// Delete opportunities PDF - أدمن فقط
router.delete(
  '/company/:companyId/opportunities-pdf', 
  authAdmin, 
  deleteOpportunitiesPDF
);

export default router;