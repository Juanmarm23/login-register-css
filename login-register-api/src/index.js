// Cargar variables de entorno desde el archivo .env
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user.routes');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware para permitir peticiones JSON y CORS
app.use(cors());
app.use(express.json());

// Montamos las rutas bajo /api
app.use('/api', userRoutes);

// Arrancamos el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
