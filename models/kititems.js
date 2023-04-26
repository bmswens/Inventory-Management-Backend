'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class KitItems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  KitItems.init({
    kit: DataTypes.STRING,
    nsn: DataTypes.STRING,
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    errc: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    authorized: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'KitItems',
  });
  return KitItems;
};