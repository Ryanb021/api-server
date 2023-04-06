'use strict';

module.exports = (sequelizeDB, DataTypes) => {
  return sequelizeDB.define('clothes', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
