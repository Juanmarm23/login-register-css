require('dotenv').config();

const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user.routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Montamos las rutas bajo /api
app.use('/api', userRoutes);

// Mostrar rutas disponibles solo si app._router existe
if (app._router && app._router.stack) {
  app._router.stack.forEach((r) => {
    if (r.route && r.route.path) {
      const method = Object.keys(r.route.methods)[0].toUpperCase();
      console.log(`Ruta disponible: [${method}] /api${r.route.path}`);
    }
  });
}


app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
