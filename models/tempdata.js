'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tempdata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tempdata.init({
    mode: DataTypes.STRING,
    branchName: DataTypes.STRING,
    customerId: DataTypes.STRING,
    saleId: DataTypes.STRING,
    employeeId: DataTypes.STRING,
    customerName: DataTypes.STRING,
    sellRate: DataTypes.STRING,
    vendorRate: DataTypes.STRING,
    augmontTransactionID: DataTypes.STRING,
    gst: DataTypes.STRING,
    weight: DataTypes.STRING,
    paidAmount: DataTypes.STRING,
    transactionDateTime: DataTypes.STRING,
    invoiceNumber: DataTypes.STRING,
    invoiceDate: DataTypes.STRING,
    fileId: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tempdata',
  });
  return tempdata;
};