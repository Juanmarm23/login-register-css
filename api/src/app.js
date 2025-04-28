const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user.routes');

const app = express();

// Middlewares
app.use(cors()); // Para permitir peticiones desde otras URLs (como el frontend)
app.use(express.json()); // Para que Express entienda JSON

// Rutas
app.use('/api/users', userRoutes);

module.exports = app;
