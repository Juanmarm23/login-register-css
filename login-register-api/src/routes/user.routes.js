import express from 'express';
import {
  registerUser,
  loginUser,
  getLoggedUser
} from '../controllers/user.controller.js';

import { authenticateToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Registro
router.post('/register', registerUser);

// Login
router.post('/login', loginUser);

// Obtener usuario logueado (requiere token)
router.get('/me', authenticateToken, getLoggedUser);

export default router;
