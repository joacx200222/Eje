'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaccions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.date, {foreignKey: 'fechaTransaccion'})
      this.belongsTo(models.product, {foreignKey: 'productoNombre'})
      this.belongsTo(models.usuario, {foreignKey: 'nombreUsuario'})
    }
  }
  transaccions.init({
    direccion: DataTypes.STRING,
    cantidad: DataTypes.INTEGER,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'transaccions',
  });
  return transaccions;
};