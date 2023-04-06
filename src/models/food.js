'use strict';

module.exports = (sequelizeDB, DataTypes) => {
  return sequelizeDB.define('food', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    portion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    calories: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
};
