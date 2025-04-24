import express from 'express';
import { registerUser, loginUser } from '../controllers/user.controller.js';

const router = express.Router();

// Ruta para registrar un usuario
router.post('/register', registerUser);

// Ruta para hacer login
router.post('/login', loginUser);

export default router;

/*
¿Qué hace este archivo?
Importa express.Router(), que nos permite crear mini rutas organizadas.

Define dos rutas:

POST /register → ejecuta registerUser

POST /login → ejecuta loginUser

Exporta el router para que lo podamos usar en index.js.

*/