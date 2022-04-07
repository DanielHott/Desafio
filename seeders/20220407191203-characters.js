module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Characters',
    [
        {
          name: 'Jon Snow',
          codename: 'Príncipe de Pedra do Dragão',
          years: 24,
          localization: 'Norte',
          informations: 'https://anapioficeandfire.com/api/characters/3',
          id_book: 1,
        },
        {
          name: 'Tyrion Lannister',
          codename: 'Senhor de Rochedo Casterly',
          years: 39,
          localization: 'Casa Lannister ',
          informations: 'https://anapioficeandfire.com/api/characters/3',
          id_book: 2,
        },
        {
          name: 'Sansa Stark',
          codename: 'A Princesa do Norte',
          years: 24,
          localization: 'Norte',
          informations: 'https://anapioficeandfire.com/api/characters/15',
          id_book: 3,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Characters', null, {});
  },
};