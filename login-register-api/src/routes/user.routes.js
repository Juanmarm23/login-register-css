const express = require('express');
const {
  registerUser,
  loginUser,
  getLoggedUser,
  updateUser
} = require('../controllers/user.controller');

const { authenticateToken } = require('../middlewares/authMiddleware');

const router = express.Router();

// Registro de usuario
router.post('/register', registerUser);

// Login de usuario
router.post('/login', loginUser);

// Obtener información del usuario logueado (requiere token)
router.get('/me', authenticateToken, getLoggedUser);

// Actualizar nombre o contraseña (requiere token)
router.put('/update', authenticateToken, updateUser);

module.exports = router;
