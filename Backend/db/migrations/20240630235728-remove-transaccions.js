'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('transaccions', 'fechaTransaccion');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('transaccions', 'fechaTransaccion', {
      type: Sequelize.DataTypes.DATE,
      allowNull: true, 
    });
  }
};