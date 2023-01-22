'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class loggers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  loggers.init({
    userId: DataTypes.INTEGER,
    token: DataTypes.STRING,
    expiryDate:DataTypes.DATE
  }, {
    sequelize,
    modelName: 'loggers',
    paranoid:true
  });
  return loggers;
};