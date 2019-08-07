const conn = require('../conn');
const { Sequelize } = conn;


const Producer = conn.define('backstage', {
    name: Sequelize.STRING,
    password: Sequelize.STRING,
    uuid: {
      type: Sequelize.UUIDV,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    phone: Sequelize.INTEGER(10)
   
});


module.exports = Producer;