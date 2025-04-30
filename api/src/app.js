const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user.routes');  // Asegúrate de que esta ruta sea correcta

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware para permitir peticiones JSON y CORS
app.use(cors());
app.use(express.json());

// Montar las rutas bajo /api
app.use('/api', userRoutes);  // Aquí está sin el '/users' para que la ruta de login sea '/api/login'

// Arrancar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
