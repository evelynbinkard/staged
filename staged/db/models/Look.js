const conn = require('../conn');
const { Sequelize } = conn;
const Collection = require('./Collection');
const Model = require('./Model');

const Look = conn.define('look', {
    description: Sequelize.STRING,
    id: {
        type: Sequelize.UUID,
        //defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
}, {underscored: true});

Look.belongsTo(Collection);
Look.belongsTo(Model);

module.exports = Collection;