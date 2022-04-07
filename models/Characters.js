 module.exports = (sequelize, DataTypes) => {
   const Character = sequelize.define('Character', {
     id_character: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
     name: DataTypes.STRING,
     codename: DataTypes.STRING,
     years: DataTypes.INTEGER,
     localization: DataTypes.STRING,
     informations: DataTypes.STRING,
     id_book: DataTypes.INTEGER
   },
   {
     timestamps: false,
     tableName: 'Characters',
     underscored: true,
   });

   Character.associate = (models) => {
    Character.hasMany(models.Book,
        { foreignKey: 'id_book', as: 'Books' });
    };
 
    return Character;
  };