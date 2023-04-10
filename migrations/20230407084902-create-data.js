'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mode: {
        type: Sequelize.STRING
      },
      branchName: {
        type: Sequelize.STRING
      },
      saleId: {
        type: Sequelize.STRING
      },
      employeeId: {
        type: Sequelize.STRING
      },
      customerName: {
        type: Sequelize.STRING
      },
      sellRate: {
        type: Sequelize.STRING
      },
      vendorRate: {
        type: Sequelize.STRING
      },
      augmontTransactionID: {
        type: Sequelize.STRING
      },
      gst: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.STRING
      },
      paidAmount: {
        type: Sequelize.STRING
      },
      transactionDateTime: {
        type: Sequelize.STRING
      },
      invoiceNumber: {
        type: Sequelize.STRING
      },
      invoiceDate: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('data');
  }
};