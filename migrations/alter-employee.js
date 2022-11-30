'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('employees',  'role',{
        type: Sequelize.STRING,
        defaultValue: "employee"
        }
  );
  },
  async down(queryInterface, Sequelize) {
    //await queryInterface.dropTable('courses');
  }
};