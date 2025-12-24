import express from 'express';
import { 
  createJob, 
  getJobs, 
  getJobById, 
  updateJob, 
  deleteJob 
} from '../controllers/jobController.js';
import { authAdmin } from '../middleware/auth.js';

const router = express.Router();

// GET /api/jobs
router.get('/', getJobs);

// GET /api/jobs/:id
router.get('/:id', getJobById);

// POST /api/jobs
router.post('/', authAdmin, createJob);

// PUT /api/jobs/:id
router.put('/:id', authAdmin, updateJob);

// DELETE /api/jobs/:id
router.delete('/:id', authAdmin, deleteJob);

export default router;