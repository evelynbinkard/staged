const conn = require('../conn');
const { Sequelize } = conn;
const Model = require('./Model')

const Backstage = conn.define('backstage', {
    name: Sequelize.STRING,
    password: Sequelize.STRING,
    id: {
        type: Sequelize.UUID,
        
        primaryKey: true
      },
    phone: Sequelize.INTEGER(10),
    call_time: Sequelize.DATE,
    check_in_time: Sequelize.DATE,
 
}, {underscored: true});

Backstage.belongsTo(Model);

module.exports = Backstage;