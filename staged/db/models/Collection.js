const conn = require('../conn');
const { Sequelize } = conn;
const Designer = require('./Designer')

const Collection = conn.define('collection', {
    name: Sequelize.STRING,
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
    music: Sequelize.STRING,
    tearsheet: Sequelize.STRING
 
}, {underscored: true});

const collections = [{name: 'arugaments', music: 'they might be giants'}, 
                      {name: 'P A N D A', music: 'girl on fire'}, {name: 'hoodz', music: 'boyz in da hood'}];
// conn.sync({force: true})
// .then(() => collections.forEach(collection => {
//   Collection.create({
      
//       name: collection.name,
//       music: collection.music,
//       tearsheet: 'https://mvpstaged.s3.us-east-2.amazonaws.com/tearsheets/HH2019Makeup.pdf'
      
//   })
// }))
// .catch(err => console.log(err));

Collection.belongsTo(Designer);

module.exports = Collection;