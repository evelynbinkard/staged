const conn = require('../conn');
const { Sequelize } = conn;

const Designer = conn.define('designer', {
    name: Sequelize.STRING,
    password: Sequelize.STRING,
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      phone: Sequelize.INTEGER,
      call_time: Sequelize.TIME,
      check_in_time: Sequelize.TIME

});
const designers = ['Zubair', 'Kim', 'Mentakis']

// conn.sync({force: true})
// .then(() => designers.forEach(designer => {
//   Designer.create({
      
//       name: designer,
//       password: 'password',
//       call_time: '14:00:00',
//       phone: 0987654,
      
//   })
// }))
// .catch(err => console.log(err));

module.exports = Designer;