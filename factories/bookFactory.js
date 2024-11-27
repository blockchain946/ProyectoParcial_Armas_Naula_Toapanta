const Book = require('../models/book');

class BookFactory {
  static createBook(data) {
    return Book.build(data);
  }
}

module.exports = BookFactory;