const bookService = require('../services/bookService');

// Obtener todos los libros
exports.getAllBooks = async (req, res) => {
  try {
    const books = await bookService.getAllBooks();
    res.render('index', { books }); // Renderiza la vista index.ejs con los libros
  } catch (error) {
    res.status(500).send('Error al obtener los libros: ' + error.message);
  }
};

// Obtener un libro por ID
exports.getBookById = async (req, res) => {
  try {
    const book = await bookService.getBookById(req.params.id);
    if (!book) {
      return res.status(404).send('Libro no encontrado');
    }
    res.json(book);
  } catch (error) {
    res.status(500).send('Error al obtener el libro: ' + error.message);
  }
};

// Crear un nuevo libro
exports.createBook = async (req, res) => {
  try {
    const { nombreLibro, autor, editorial, añoPublicacion } = req.body;
    const newBook = await bookService.createBook({ nombreLibro, autor, editorial, añoPublicacion });
    res.status(201).json(newBook); // Retorna el libro creado
  } catch (error) {
    res.status(500).send('Error al crear el libro: ' + error.message);
  }
};

// Actualizar un libro existente
exports.updateBook = async (req, res) => {
  try {
    const book = await bookService.updateBook(req.params.id, req.body);
    if (!book) {
      return res.status(404).send('Libro no encontrado');
    }
    res.json(book); // Devuelve el libro actualizado
  } catch (error) {
    res.status(500).send('Error al actualizar el libro: ' + error.message);
  }
};

// Eliminar un libro
exports.deleteBook = async (req, res) => {
  try {
    await bookService.deleteBook(req.params.id);
    res.status(204).send(); // Respuesta de éxito sin contenido
  } catch (error) {
    res.status(500).send('Error al eliminar el libro: ' + error.message);
  }
};