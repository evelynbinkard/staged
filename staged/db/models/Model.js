const conn = require('../conn');
const { Sequelize } = conn;




const Model = conn.define('model', {
    name: Sequelize.STRING,
    password: Sequelize.STRING,
    uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
    phone: Sequelize.INTEGER,
    call_time: Sequelize.TIME,
    check_in_time: Sequelize.TIME,
    instagram: Sequelize.STRING,
    headshot: Sequelize.STRING

});

const hratx42 = [
  {name: 'Zona', password: 'password',call_time: '18:00:00',  phone: 8675309, instagram: 'hratxmods', headshot: 'https://mvpstaged.s3.us-east-2.amazonaws.com/headshots/hack+reactor+logo.png'},
  {name: 'Tyler', password: 'password',call_time: '18:00:00',  phone: 8675309, instagram: 'hratxmods', headshot: 'https://mvpstaged.s3.us-east-2.amazonaws.com/headshots/hack+reactor+logo.png'},
  {name: 'Ibrahim', password: 'password',call_time: '18:00:00',  phone: 8675309, instagram: 'hratxmods', headshot: 'https://mvpstaged.s3.us-east-2.amazonaws.com/headshots/hack+reactor+logo.png'},
  {name:'Michael', password: 'password',call_time: '18:00:00',  phone: 8675309, instagram: 'hratxmods', headshot: 'https://mvpstaged.s3.us-east-2.amazonaws.com/headshots/hack+reactor+logo.png'},
  {name: 'Ross', password: 'password',call_time: '18:00:00',  phone: 8675309, instagram: 'hratxmods', headshot: 'https://mvpstaged.s3.us-east-2.amazonaws.com/headshots/hack+reactor+logo.png'},
  {name:'Doris', password: 'password',call_time: '18:00:00',  phone: 8675309, instagram: 'hratxmods', headshot: 'https://mvpstaged.s3.us-east-2.amazonaws.com/headshots/hack+reactor+logo.png'},
  {name:'Miles', password: 'password',call_time: '18:00:00',  phone: 8675309, instagram: 'hratxmods', headshot: 'https://mvpstaged.s3.us-east-2.amazonaws.com/headshots/hack+reactor+logo.png'},
  {name: 'Brandon', password: 'password',call_time: '18:00:00',  phone: 8675309, instagram: 'hratxmods', headshot: 'https://mvpstaged.s3.us-east-2.amazonaws.com/headshots/hack+reactor+logo.png'},
  {name:'Brendan', password: 'password',call_time: '18:00:00',  phone: 8675309, instagram: 'hratxmods', headshot: 'https://mvpstaged.s3.us-east-2.amazonaws.com/headshots/hack+reactor+logo.png'},
  {name:'Laine', password: 'password',call_time: '18:00:00',  phone: 8675309, instagram: 'hratxmods', headshot: 'https://mvpstaged.s3.us-east-2.amazonaws.com/headshots/hack+reactor+logo.png'},
  {name:'Brooke', password: 'password',call_time: '18:00:00',  phone: 8675309, instagram: 'hratxmods', headshot: 'https://mvpstaged.s3.us-east-2.amazonaws.com/headshots/hack+reactor+logo.png'},
  {name:'Hadley', password: 'password',call_time: '18:00:00',  phone: 8675309, instagram: 'hratxmods', headshot: 'https://mvpstaged.s3.us-east-2.amazonaws.com/headshots/hack+reactor+logo.png'},
  {name:'Garrett', password: 'password',call_time: '18:00:00',  phone: 8675309, instagram: 'hratxmods', headshot: 'https://mvpstaged.s3.us-east-2.amazonaws.com/headshots/hack+reactor+logo.png'},
  {name:'Charles', password: 'password',call_time: '18:00:00',  phone: 8675309, instagram: 'hratxmods', headshot: 'https://mvpstaged.s3.us-east-2.amazonaws.com/headshots/hack+reactor+logo.png'},
  {name:'Evelyn', password: 'password',call_time: '18:00:00',  phone: 8675309, instagram: 'hratxmods', headshot: 'https://mvpstaged.s3.us-east-2.amazonaws.com/headshots/hack+reactor+logo.png'},
  {name: 'DJ', password: 'password',call_time: '18:00:00',  phone: 8675309, instagram: 'hratxmods', headshot: 'https://mvpstaged.s3.us-east-2.amazonaws.com/headshots/hack+reactor+logo.png'},
  {name: 'Justan', password: 'password',call_time: '18:00:00',  phone: 8675309, instagram: 'hratxmods', headshot: 'https://mvpstaged.s3.us-east-2.amazonaws.com/headshots/hack+reactor+logo.png'},
  {name: 'Chris', password: 'password',call_time: '18:00:00',  phone: 8675309, instagram: 'hratxmods', headshot: 'https://mvpstaged.s3.us-east-2.amazonaws.com/headshots/hack+reactor+logo.png'},
  {name: 'Trevor', password: 'password',call_time: '18:00:00',  phone: 8675309, instagram: 'hratxmods', headshot: 'https://mvpstaged.s3.us-east-2.amazonaws.com/headshots/hack+reactor+logo.png'},
  {name: 'Landon', password: 'password',call_time: '18:00:00',  phone: 8675309, instagram: 'hratxmods', headshot: 'https://mvpstaged.s3.us-east-2.amazonaws.com/headshots/hack+reactor+logo.png'},
  {name: 'Jordan', password: 'password',call_time: '18:00:00',  phone: 8675309, instagram: 'hratxmods', headshot: 'https://mvpstaged.s3.us-east-2.amazonaws.com/headshots/hack+reactor+logo.png'},
  {name: 'Hannah', password: 'password',call_time: '18:00:00',  phone: 8675309, instagram: 'hratxmods', headshot: 'https://mvpstaged.s3.us-east-2.amazonaws.com/headshots/hack+reactor+logo.png'},
  {name: 'Brian', password: 'password',call_time: '18:00:00',  phone: 8675309, instagram: 'hratxmods', headshot: 'https://mvpstaged.s3.us-east-2.amazonaws.com/headshots/hack+reactor+logo.png'},
  {name: 'Kevin', password: 'password',call_time: '18:00:00',  phone: 8675309, instagram: 'hratxmods', headshot: 'https://mvpstaged.s3.us-east-2.amazonaws.com/headshots/hack+reactor+logo.png'},
  {name: 'Gary', password: 'password',call_time: '18:00:00',  phone: 8675309, instagram: 'hratxmods', headshot: 'https://mvpstaged.s3.us-east-2.amazonaws.com/headshots/hack+reactor+logo.png'},
  {name: 'Mitchell', password: 'password',call_time: '18:00:00',  phone: 8675309, instagram: 'hratxmods', headshot: 'https://mvpstaged.s3.us-east-2.amazonaws.com/headshots/hack+reactor+logo.png'}
  ];
// let count = 0;
// const createID = () => {
//   return (count++).toString();
// }
// conn.sync({force: false})
// .then(() => hratx42.forEach(model => {
//   Model.create({
      
//       name: model.name,
//       password: model.password,
//       call_time: model.call_time,
//       phone: model.phone,
//       instagram: model.instagram,
//       headshot: model.headshot
//   })
// }))
// .catch(err => console.log(err));

const notCheckedIn = () => {
  return Model.findAll()
  //({
  //     // attributes: [name, phone],
  //     // where: {
  //     //     checked_in: null,
  //     // },
  //     order: [name, DESC]
  // }) 
}

module.exports = {Model, notCheckedIn};