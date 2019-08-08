const conn = require('../conn');
const { Sequelize } = conn;

const Designer = conn.define('designer', {
    name: Sequelize.STRING,
    password: Sequelize.STRING,
    id: {
        type: Sequelize.UUID,
       
        primaryKey: true
      },
    phone: Sequelize.INTEGER(10),
    call_time: Sequelize.DATE,
    check_in_time: Sequelize.DATE

});

module.exports = Designer;