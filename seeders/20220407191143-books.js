'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert("Books", [
      {
        name: 'A guerra dos tronos',
        release_year: 1996,
        cover: 'https://images-na.ssl-images-amazon.com/images/I/91+1SUO3vUL.jpg',
        author: 'George R. R. Martin',
      },
      {
        name: 'A furia dos reis',
        release_year: 1998,
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51OxMUhiXwL._SX346_BO1,204,203,200_.jpg',
        author: 'George R. R. Martin',
      },
      {
        name: 'A Tormenta de Espadas',
        release_year: 2000,
        cover: 'https://images-na.ssl-images-amazon.com/images/I/81+dcubJR6L.jpg',
        author: 'George R. R. Martin',
      },
      {
        name: 'O Festim dos Corvos',
        release_year: 2005,
        cover: 'https://images-na.ssl-images-amazon.com/images/I/915n69YKrCL.jpg',
        author: 'George R. R. Martin',
      },
      {
        name: 'A Dança dos Dragões',
        release_year: 2011,
        cover: 'https://images-na.ssl-images-amazon.com/images/I/A1q+wZFZbGL.jpg',
        author: 'George R. R. Martin',
      },
    ])
  }, 
  down: async (queryInterface, _Sequelize) => {
    queryInterface.bulkDelete("Books", null, {})
  }
}