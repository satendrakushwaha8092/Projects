'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usersData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      usersData.belongsToMany(models.profilesData, {
        through: "User_Profile",
        foreignKey: "id",
      });
      // define association here
    }
  }
  usersData.init({
    username: DataTypes.STRING,
    points: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'usersData',
  });
  return usersData;
};