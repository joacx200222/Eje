"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Series extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.product, {
        foreignKey: "serie",
        as: "productos",
      });
    }
  }
  Series.init(
    {
      nombre: DataTypes.STRING,
      descripcion: DataTypes.STRING,
      imagen: DataTypes.STRING,
      productoId: {
        type: DataTypes.INTEGER,
        references: {
          model: "product",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Series",
    },
  );
  return Series;
};

