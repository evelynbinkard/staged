const conn = require('../conn');
const { Sequelize } = conn;
const Designer = require('./Designer')

const Collection = conn.define('collection', {
    name: Sequelize.STRING,
    uuid: {
      type: DataTypes.UUIDV1,
      primaryKey: true
    },
    song: Sequelize.STRING,
    tearsheet: Sequelize.STRING
 
}, {underscored: true});

Collection.belongsTo(Designer);

module.exports = Collection;