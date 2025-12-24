import express from 'express';
import { submitInvestor } from '../controllers/investorController.js';
import { uploadMemory } from '../middleware/upload.js';

const router = express.Router();

// POST /api/investor
router.post(
  '/',
  uploadMemory.fields([
    { name: "identityPhoto", maxCount: 1 },
    { name: "commercialRegister", maxCount: 1 },
    { name: "taxCard", maxCount: 1 },
  ]),
  submitInvestor
);

export default router;