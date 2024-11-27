const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Asegúrate de la ruta correcta

// Ruta para renderizar la vista de iniciar sesión
router.get('/iniciar-sesion', userController.renderLoginPage);

// Ruta para manejar el inicio de sesión
router.post('/iniciar-sesion', userController.loginUser);

// Ruta para crear un nuevo usuario
router.post('/users', userController.createUser);

module.exports = router;
