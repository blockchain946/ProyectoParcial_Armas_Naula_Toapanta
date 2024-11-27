const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  nombres: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellidos: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  identificacion: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  telefono: {
    type: DataTypes.BIGINT,
    allowNull: true,
    validate: {
      isNumeric: true, 
    },
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  perfil: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Usuario', 
  },
  estadoPrestamo: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false, 
  },
});

module.exports = User;