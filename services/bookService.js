const Book = require('../models/book');

class BookService {
  async getAllBooks() {
    return await Book.findAll();
  }

  async getBookById(id) {
    return await Book.findByPk(id);
  }

  async createBook(data) {
    return await Book.create(data);
  }

  async updateBook(id, data) {
    const book = await Book.findByPk(id);
    if (!book) throw new Error('Book not found');
    return await book.update(data);
  }

  async deleteBook(id) {
    const book = await Book.findByPk(id);
    if (!book) throw new Error('Book not found');
    return await book.destroy();
  }
}

module.exports = new BookService();