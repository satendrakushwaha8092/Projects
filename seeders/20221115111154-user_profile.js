'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('User_Profiles', [{
      user_id: 1,
      profile_id:1,
      createdAt:new Date(),
      updatedAt:new Date()
     },{
      user_id: 2,
      profile_id:2,
      createdAt:new Date(),
      updatedAt:new Date()
     },{
      user_id: 2,
      profile_id:2,
      createdAt:new Date(),
      updatedAt:new Date()
     }]);
    
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   user_id: 'John Doe',
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
