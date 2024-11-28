const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Ruta para mostrar la lista de libros
router.get('/books', bookController.getAllBooks); // Llamamos al controlador para obtener todos los libros

// Ruta para mostrar el formulario para agregar un nuevo libro
router.get('/books/newBook', bookController.renderNewBookForm); // Renderiza la vista para crear un libro

// Ruta para mostrar el formulario para editar un libro existente
router.get('/books/edit/:id', bookController.renderEditBookForm); // Renderiza la vista para editar un libro

// Ruta para obtener un libro por su ID
router.get('/books/:id', bookController.getBookById); // Llamamos al controlador para obtener un libro por ID

// Ruta para crear un nuevo libro
router.post('/books', bookController.createBook); // Llamamos al controlador para crear un libro

// Ruta para actualizar un libro existente
router.post('/books/:id', bookController.updateBook); // Llamamos al controlador para actualizar un libro por ID

// Ruta para eliminar un libro
router.delete('/books/:id', bookController.deleteBook); // Llamamos al controlador para eliminar un libro por ID

module.exports = router;