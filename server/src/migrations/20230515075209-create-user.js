"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: { allowNull: false, type: Sequelize.STRING },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          isEmail: { msg: "Invalid Email address!" },
        },
      },
      address: { allowNull: true, type: Sequelize.STRING },
      phone: { allowNull: true, type: Sequelize.STRING },
      date: { allowNull: false, type: Sequelize.BIGINT },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
