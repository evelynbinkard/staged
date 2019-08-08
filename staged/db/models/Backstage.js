const conn = require('../conn');
const { Sequelize } = conn;
const Model = require('./Model')

const Backstage = conn.define('backstage', {
    name: Sequelize.STRING,
    password: Sequelize.STRING,
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      phone: Sequelize.INTEGER,
      call_time: Sequelize.TIME,
      check_in_time: Sequelize.TIME,
   
});

// conn.sync({force: true})
// .then(() => {
//   let count = 1;

//   while(count <= 26) {
//     Backstage.create({
        
//         name: 'bob',
//         password: 'password',
//         call_time: '16:00:00',
//         phone: 1234567,
//     })
//     count++
//   }
// })
// .catch(err => console.log(err));

Backstage.belongsTo(Model, {foreignKey: 'modelID'});

module.exports = Backstage;