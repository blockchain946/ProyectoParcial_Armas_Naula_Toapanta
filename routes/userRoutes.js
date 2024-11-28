const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Ruta para mostrar la vista de iniciar sesión
router.get('/iniciar-sesion', userController.renderLoginPage);

// Ruta para mostrar la vista de crear cuenta
router.get('/crear-cuenta', userController.renderRegisterPage);

// Ruta para manejar el registro de un nuevo usuario
router.post('/users', userController.createUser);

// Ruta para manejar el inicio de sesión
router.post('/iniciar-sesion', userController.loginUser);

router.get('/userBook/:id', userController.renderUser);

module.exports = router;
