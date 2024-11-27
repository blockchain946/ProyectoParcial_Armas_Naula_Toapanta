const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Book = sequelize.define('Book', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  nombreLibro: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  editorial: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  añoPublicacion: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

module.exports = Book;