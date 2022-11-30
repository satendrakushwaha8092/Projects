'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  course.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    video_Url: DataTypes.STRING,
    topics: DataTypes.ARRAY(DataTypes.DECIMAL),
    duration: DataTypes.STRING,
    category: DataTypes.STRING,
    permission: DataTypes.STRING,
  }, {
    sequelize,
    paranoid: true,
    modelName: 'course',
  });
  return course;
};