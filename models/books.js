'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  books.init({
    title: DataTypes.STRING,
    excerpt: DataTypes.STRING,
    userId: DataTypes.STRING,
    ISBN: DataTypes.STRING,
    category: DataTypes.STRING,
    subcategory: DataTypes.STRING,
    reviews: DataTypes.STRING,
    deletedAt: DataTypes.STRING,
    isDeleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'books',
  });
  return books;
};