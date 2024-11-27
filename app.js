const express = require('express');
const path = require('path');
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Configurar EJS como motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para manejar datos JSON y formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar rutas
app.use('/', bookRoutes);
app.use('/', userRoutes);

module.exports = app;
