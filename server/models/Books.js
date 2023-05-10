const {db} = require('../db');
const { Sequelize, DataTypes} = require('sequelize');

const Book = db.define('book', {
  title: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.TEXT
  },
  image: {
    type: DataTypes.STRING
  },
  meme: {
    type: DataTpes.STRING
  }
});

module.exports = {Book};