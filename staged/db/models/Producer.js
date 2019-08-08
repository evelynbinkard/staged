const conn = require('../conn');
const { Sequelize } = conn;


const Producer = conn.define('producer', {
    name: Sequelize.STRING,
    password: Sequelize.STRING,
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    phone: Sequelize.INTEGER(10)
   
});


// conn.sync({force: true})
// .then(() => 
//   Producer.create({
      
//       name: 'Linden',
//       password: 'password',
      
//       phone: 0987654,
      
  
// }))
// .catch(err => console.log(err));


module.exports = Producer;