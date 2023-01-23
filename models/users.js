'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users.belongsToMany(models.jobs, {
        foreignKey: "id",
        through: "applied_jobs",
      });
      // define association here
    }
  }
  users.init({
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    skills: DataTypes.STRING,
    resume: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
    paranoid:true
  });
  return users;
};