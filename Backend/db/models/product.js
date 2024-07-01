'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product.init({
    nombre: DataTypes.STRING,
    fabricante: DataTypes.STRING,
    precio: DataTypes.FLOAT,
    serie: DataTypes.STRING,
    tamano: DataTypes.FLOAT,
    material: DataTypes.STRING,
    movilidad: DataTypes.BOOLEAN,
    piezas: DataTypes.INTEGER,
    combinable: DataTypes.BOOLEAN,
    imagen: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};