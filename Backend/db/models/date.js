'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class date extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  date.init({
    fecha: DataTypes.DATE,
    año: DataTypes.INTEGER,
    mes: DataTypes.INTEGER,
    dia: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'date',
  });
  return date;
};