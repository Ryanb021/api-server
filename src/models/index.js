'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const clothes = require('./clothes');
const food = require('./food');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory' : process.env.DATABASE_URL;

const sequelizeDB = new Sequelize(DATABASE_URL);

const clothesModel = clothes(sequelizeDB, DataTypes);
const foodModel = food(sequelizeDB, DataTypes);

module.exports = {
  sequelizeDB,
  clothesModel,
  foodModel,
};
