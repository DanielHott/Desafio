require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.APP_USERNAME,
    "password": process.env.APP_PASSWORD,
    "database": process.env.APP_DATABASE,
    "host": process.env.APP_HOST,
    "dialect": process.env.APP_DIALECT,
  },
  "test": {
    "username": process.env.APP_USERNAME,
    "password": process.env.APP_PASSWORD,
    "database": process.env.APP_DATABASE,
    "host": process.env.APP_HOST,
    "dialect": process.env.APP_DIALECT
  },
  "production": {
    "username": process.env.APP_USERNAME,
    "password": process.env.APP_PASSWORD,
    "database": process.env.APP_DATABASE,
    "host": process.env.APP_HOST,
    "dialect": process.env.APP_DIALECT
  }
}
