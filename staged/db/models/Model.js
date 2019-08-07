const conn = require('../conn');
const { Sequelize } = conn;

const Model = conn.define('model', {
    name: Sequelize.STRING,
    password: Sequelize.STRING,
    uuid: {
      type: DataTypes.UUIDV1,
      primaryKey: true
    },
    call_time: Sequelize.DATE,
    check_in_time: Sequelize.DATE,
    instagram: Sequelize.STRING

});

module.exports = Designer;