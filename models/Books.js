module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
      id_book: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      release_year: DataTypes.INTEGER,
      cover: DataTypes.STRING,
      author: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'Books',
      underscored: true,
    });
 
    Book.associate = (models) => {
     Book.hasMany(models.Character,
         { foreignKey: 'id_book', as: 'Characters' });
     };
  
     return Book;
   };