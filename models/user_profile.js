'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       User_Profile.hasMany(models.usersData,{foreignKey: "id"})
       User_Profile.hasMany(models.profilesData,{foreignKey: "id"})
      // define association here
    }
  }
  User_Profile.init({
    user_id: DataTypes.INTEGER,
    profile_id: DataTypes.INTEGER,
  }, 
  {
    sequelize,
    modelName: 'User_Profile',
  });
  return User_Profile;
};