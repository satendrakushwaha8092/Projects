'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class profilesData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      profilesData.belongsToMany(models.usersData, {
        through: "User_Profile",
        foreignKey: "id",
      });
      // define association here
    }
  }
  profilesData.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'profilesData',
  });
  return profilesData;
};