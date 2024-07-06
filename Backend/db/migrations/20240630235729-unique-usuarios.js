'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Agregar restricción UNIQUE a la columna `fecha`
    await queryInterface.addConstraint('usuarios', {
      fields: ['nombre'], // Nombre de la columna
      type: 'unique',
      name: 'unique_nombreU_constraint' // Nombre opcional para la restricción única
    });
  },

  async down (queryInterface, Sequelize) {
    // Remover la restricción UNIQUE de la columna `fecha`
    await queryInterface.removeConstraint('usuarios', 'nombre');
  }
};
