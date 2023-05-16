const {db} = require('../db');
const { Sequelize, DataTypes} = require('sequelize');

const Book = db.define('book', {
  title: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.TEXT
  },
  type: {
    type: DataTypes.STRING
  },
  author: {
    type: DataTypes.STRING
  },
  image: {
    type: DataTypes.STRING
  },
  meme: {
    type: DataTypes.STRING
  },
  audio: {
    type: DataTypes.STRING // Array sometimes?
  }
});

module.exports = {Book};