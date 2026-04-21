import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path, { format } from 'path';
import { fileURLToPath } from 'url';
import adminRoutes from './routes/adminRoutes.js';
import jobRoutes from './routes/jobRoutes.js';
import applicantRoutes from './routes/applicantRoutes.js';
import investorRoutes from './routes/investorRoutes.js';
import companyRoutes from './routes/companyRoutes.js';
import investmentRoutes from './routes/investmentRoutes.js';
import sectorRoutes from './routes/sectorsRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';  
import { responseFilter } from './middleware/responseFilter.js';
import { detectLanguage } from './middleware/languageMiddleware.js';
import { trackAnalytics } from './middleware/analyticsMiddleware.js';
import analyticsRoutes from './routes/analyticsRoutes.js';
dotenv.config();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(detectLanguage);
app.use(trackAnalytics);

// Serve uploaded files
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/admin', adminRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/applicants', applicantRoutes);
app.use('/api/investor', investorRoutes);
// استيراد الـ routes الجديدة

// استخدام الـ routes
app.use('/api/companies', companyRoutes);
app.use('/api/investments', investmentRoutes);
app.use('/api/sectors', sectorRoutes);
app.use('/api/upload', uploadRoutes); 
app.use('/api/analytics', analyticsRoutes);



// Test route
app.get('/', (req, res) => res.send('nspo Back-End is running'));



// Use routes


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
}); 
export default app;