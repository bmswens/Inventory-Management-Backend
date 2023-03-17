'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Documents', {
      id: {
        primaryKey: true,
        type: Sequelize.STRING,
        allowNull: false
      },
      nsn: {
        type: Sequelize.STRING
      },
      unit: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.STRING
      },
      condition: {
        type: Sequelize.STRING
      },
      distribution: {
        type: Sequelize.STRING
      },
      unitPrice: {
        type: Sequelize.STRING
      },
      money: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      micap: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Documents');
  }
};