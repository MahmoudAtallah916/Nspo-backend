// middleware/investmentUpload.js
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// التأكد من وجود مجلد uploads/investment
const investmentDir = path.join(__dirname, '../../uploads/investment/');
if (!fs.existsSync(investmentDir)) {
  fs.mkdirSync(investmentDir, { recursive: true });
}

// Storage خاص بالاستثمار
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, investmentDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, uniqueSuffix + ext);
  },
});

// Middleware لرفع صورة واحدة
export const uploadInvestmentImage = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB كحد أقصى
  fileFilter: (req, file, cb) => {
    // فقط الصور
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  },
});