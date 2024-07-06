'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     return queryInterface.addColumn(
      "transaccions", // name of Source model
      "fechaTransaccion", // name of the key we're adding
      {
        type: Sequelize.DATE,
        references: {
          model: "dates", // name of Target model
          key: "fecha", // key in Target model that we're referencing
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      }
    );

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     return queryInterface.removeColumn(
      "transaccions", // name of Source model
      "fechaTransaccion" // key we want to remove
    );

  }
};