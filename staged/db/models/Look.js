const conn = require('../conn');
const { Sequelize } = conn;
const Collection = require('./Collection');
const Model = require('./Model');

const Look = conn.define('Look', {
    description: Sequelize.STRING,
    uuid: {
      type: DataTypes.UUIDV1,
      primaryKey: true
    },
}, {underscored: true});

Look.belongsTo(Collection);
Look.belongsTo(Model);

module.exports = Collection;