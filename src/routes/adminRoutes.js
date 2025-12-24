import express from 'express';
import { signup, login } from '../controllers/adminController.js';

const router = express.Router();

// POST /api/admin/signup
router.post('/signup', signup);

// POST /api/admin/login
router.post('/login', login);

export default router;