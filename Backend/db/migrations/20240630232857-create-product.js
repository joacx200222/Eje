"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nombre: {
        type: Sequelize.STRING,
      },
      fabricante: {
        type: Sequelize.STRING,
      },
      precio: {
        type: Sequelize.FLOAT,
      },
      serie: {
        type: Sequelize.INTEGER,
        reference: {
          model: "series",
          key: "id",
        },
      },
      tamano: {
        type: Sequelize.FLOAT,
      },
      material: {
        type: Sequelize.STRING,
      },
      movilidad: {
        type: Sequelize.BOOLEAN,
      },
      piezas: {
        type: Sequelize.INTEGER,
      },
      combinable: {
        type: Sequelize.BOOLEAN,
      },
      imagen: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");
  },
};

