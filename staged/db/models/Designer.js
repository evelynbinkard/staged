const conn = require('../conn');
const { Sequelize } = conn;

const Designer = conn.define('designer', {
    name: Sequelize.STRING,
    password: Sequelize.STRING,
    uuid: {
      type: DataTypes.UUIDV1,
      primaryKey: true
    },
    call_time: Sequelize.DATE,
    check_in_time: Sequelize.DATE

});

module.exports = Designer;