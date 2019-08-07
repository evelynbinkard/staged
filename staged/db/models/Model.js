const conn = require('../conn');
const { Sequelize } = conn;

const Model = conn.define('model', {
    name: Sequelize.STRING,
    password: Sequelize.STRING,
    id: {
        type: Sequelize.UUID,
        //defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
    phone: Sequelize.INTEGER(10),
    call_time: Sequelize.DATE,
    check_in_time: Sequelize.DATE,
    instagram: Sequelize.STRING,
    headshot: Sequelize.STRING

});

module.exports = Model;