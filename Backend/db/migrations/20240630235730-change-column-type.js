'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Cambiar el tipo de dato de la columna imagen en la tabla products
    await queryInterface.changeColumn('products', 'imagen', {
      type: Sequelize.STRING(800), // Establecer un tamaño máximo de 800 caracteres
      allowNull: true, // Cambia esto según sea necesario
    });
  },

  async down (queryInterface, Sequelize) {
    // Revertir el cambio de tipo de dato de la columna imagen en la tabla products
    await queryInterface.changeColumn('products', 'imagen', {
      type: Sequelize.BLOB,
      allowNull: true, // Cambia esto según sea necesario
    });
  }
};
