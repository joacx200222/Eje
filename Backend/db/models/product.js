"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.series, {
        foreignKey: "serie",
        as: "serie",
      });
      this.hasMany(models.transaccions, {
        as: "transaccion",
        foreignKey: "productoNombre",
      });
    }
  }
  product.init(
    {
      nombre: DataTypes.STRING,
      fabricante: DataTypes.STRING,
      precio: DataTypes.FLOAT,
      serie: DataTypes.INTEGER,
      tamano: DataTypes.FLOAT,
      material: DataTypes.STRING,
      movilidad: DataTypes.BOOLEAN,
      piezas: DataTypes.INTEGER,
      combinable: DataTypes.BOOLEAN,
      imagen: DataTypes.BLOB,
    },
    {
      sequelize,
      modelName: "product",
    },
  );

  product.associate = function (models) {
    // Asociaciones
    product.hasMany(models.Series, {
      foreignKey: "productoId",
    });
  };
  return product;
};
