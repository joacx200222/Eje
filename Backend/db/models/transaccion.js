'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.date, {foreignKey: 'fechaTransaccion'})
      this.belongsTo(models.product, {foreignKey: 'productoNombre'})
      this.belongsTo(models.usuario, {foreignKey: 'nombreUsuario'})
    }
  }
  transaccion.init({
    productoNombre: DataTypes.STRING,
    fechaTransaccion: DataTypes.DATE,
    nombreUsuario: DataTypes.STRING,
    direccion: DataTypes.STRING,
    cantidad: DataTypes.INTEGER,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'transaccion',
  });
  return transaccion;
};