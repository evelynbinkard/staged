const conn = require('../conn');
const { Sequelize } = conn;
const Collection = require('./Collection');
const Model = require('./Model');

const Look = conn.define('look', {
    description: Sequelize.STRING,
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
}, {underscored: true});

// conn.sync({force: false})
// .then(() => {
//   let count = 1;

//   while(count <= 26) {
//     Look.create({
        
//         description: `look ${count}`,
        
//     })
//     count++
//   }
// })
// .catch(err => console.log(err));

Look.belongsTo(Collection);
Look.belongsTo(Model);

module.exports = Collection;