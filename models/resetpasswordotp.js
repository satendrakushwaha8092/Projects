'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class resetPasswordOtp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  resetPasswordOtp.init({
    emailId: DataTypes.STRING,
    otp: DataTypes.INTEGER,
    expiryTime:DataTypes.DATE
  }, {
    sequelize,
    modelName: 'resetPasswordOtp',
    paranoid:true
  });
  return resetPasswordOtp;
};