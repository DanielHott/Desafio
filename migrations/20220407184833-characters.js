'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Characters", {
      id_character: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      codename : {
        allowNull: false,
        type: Sequelize.STRING,
      },
      years: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      localization: {
        allowNull: false,
        type: Sequelize.STRING
      },
      informations: {
        allowNull: false,
        type: Sequelize.STRING
      },
      id_book: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'id_book',
        references: {
          model: 'Books',
          key: 'id_book',
        },
      }
    })
  }, 
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable("Characters")
  }
}