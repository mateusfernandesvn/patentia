'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('busca_inpi', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pedido: {
        type: Sequelize.STRING
      },
      deposito: {
        type: Sequelize.STRING
      },
      titulo: {
        type: Sequelize.TEXT
      },
      ipc: {
        type: Sequelize.STRING
      },
      link: {
        type: Sequelize.TEXT
      },
      pesquisa_realizada: {
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
    await queryInterface.dropTable('busca_inpi');
  }
};