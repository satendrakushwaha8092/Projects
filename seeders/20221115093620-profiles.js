'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('usersData',[{
      username: 'name1',
      points:1000,
      createdAt:new Date(),
      updatedAt:new Date(),
    },{
      username: 'name2',
      points:500,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      username: 'name3',
      points:250,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      username: 'name4',
      points:5100,
      createdAt:new Date(),
      updatedAt:new Date()
    }])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
