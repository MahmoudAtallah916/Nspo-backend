import express from 'express';
import { 
  uploadApplicant, 
  getApplicants, 
  getApplicantsByJob,
  updateApplicationStatus,
  exportAllByJob,
  exportByJobToExcel
} from '../controllers/applicantController.js';
import { authAdmin } from '../middleware/auth.js';
import { upload } from '../middleware/upload.js';

const router = express.Router();

// POST /api/applicants/upload
router.post('/upload', upload.single('cv'), uploadApplicant);

// GET /api/applicants
router.get('/', getApplicants);

// GET /api/applicants/by-job/:jobId
router.get('/by-job/:jobId', authAdmin, getApplicantsByJob);

// PUT /api/applications/:applicantId/status
router.put('/:applicantId/status', authAdmin, updateApplicationStatus);

// GET /api/applicants/export-all-by-job
router.get('/export-all-by-job', authAdmin, exportAllByJob);

// GET /api/applicants/export-by-job/:jobId
router.get('/export-by-job/:jobId', exportByJobToExcel);

export default router;