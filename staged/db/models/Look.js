const conn = require('../conn');
const { Sequelize } = conn;
const Collection = require('./Collection');
const Model = require('./Model');

const Look = conn.define('Look', {
    description: Sequelize.STRING,
    uuid: {
        type: Sequelize.UUIDV,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
}, {underscored: true});

Look.belongsTo(Collection);
Look.belongsTo(Model);

module.exports = Collection;