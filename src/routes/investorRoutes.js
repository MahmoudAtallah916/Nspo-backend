// routes/investorRoutes.js
import express from 'express';
import { submitInvestor, getInvestors, exportInvestorsExcel } from '../controllers/investorController.js';
import { uploadMemory } from '../middleware/upload.js'; 
import { authAdmin } from '../middleware/auth.js';

const router = express.Router();

router.post(
  '/submit',
  uploadMemory.fields([
    { name: 'identityPhoto', maxCount: 1 },
    { name: 'commercialRegister', maxCount: 1 },
    { name: 'taxCard', maxCount: 1 },
    { name: 'securityApproval', maxCount: 1 }
  ]),
  submitInvestor
);

router.get('/Getinvestors', authAdmin, getInvestors);
router.get('/Getinvestors/excel', authAdmin, exportInvestorsExcel);


export default router;