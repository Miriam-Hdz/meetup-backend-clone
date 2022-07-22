'use strict';
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Users', [
    {
      firstName: 'demo',
      lastName: 'user',
      email: 'demo@user.io',
      password: bcrypt.hashSync('password')
    },
    {
      firstName: 'user',
      lastName: 'one',
      email: 'user1@user.io',
      password: bcrypt.hashSync('password2')
    },
    {
      firstName: 'user',
      lastName: 'two',
      email: 'user2@user.io',
      password: bcrypt.hashSync('password3')
    }
   ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', {
      email: { [Op.in]: ['demo@user.io', 'user1@user.io', 'user2@user.io'] }
    });
  }
};
