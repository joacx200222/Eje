'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Agregar restricción UNIQUE a la columna `fecha`
    await queryInterface.addConstraint('dates', {
      fields: ['fecha'], // Nombre de la columna
      type: 'unique',
      name: 'unique_fecha_constraint' // Nombre opcional para la restricción única
    });
  },

  async down (queryInterface, Sequelize) {
    // Remover la restricción UNIQUE de la columna `fecha`
    await queryInterface.removeConstraint('dates', 'unique_fecha_constraint');
  }
};
