'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Books", {
      id_book: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      release_year : {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      cover : {
        allowNull: false,
        type: Sequelize.STRING,
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING,
      }
    })
  }, 
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable("Books")
  }
}