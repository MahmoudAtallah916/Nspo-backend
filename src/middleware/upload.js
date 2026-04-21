// middleware/upload.js
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// التأكد من وجود مجلد uploads
const uploadsDir = path.join(__dirname, '../../uploads/');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// التأكد من وجود مجلد pdfs داخل uploads
const pdfsDir = path.join(__dirname, '../../uploads/pdfs/');
if (!fs.existsSync(pdfsDir)) {
  fs.mkdirSync(pdfsDir, { recursive: true });
}

// Storage for general file uploads
export const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // إذا كان الملف PDF، احفظه في مجلد pdfs
    if (file.mimetype === 'application/pdf') {
      cb(null, pdfsDir);
    } else {
      cb(null, uploadsDir);
    }
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    // الحفاظ على الامتداد الأصلي
    const ext = path.extname(file.originalname);
    cb(null, uniqueSuffix + ext);
  },
});

// File filter for PDF only (للاستخدام مع رفع PDF)
export const pdfFileFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('Only PDF files are allowed'), false);
  }
};

// General upload middleware (لأي نوع ملفات)
export const upload = multer({ storage });

// PDF-specific upload middleware (لرفع PDF فقط)
export const uploadPDF = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, pdfsDir);
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const ext = path.extname(file.originalname);
      cb(null, uniqueSuffix + ext);
    },
  }),
  fileFilter: pdfFileFilter,
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB max
});

// For investor email attachments (in memory)
export const uploadMemory = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 20 * 1024 * 1024 },
});