const Sequelize = require('sequelize');
const conn = new Sequelize('postgres://localhost/hr_couture');

module.exports = conn;