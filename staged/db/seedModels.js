const conn = require('./conn');
const { Sequelize } = conn;
const Model = require('./models/Model')

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

conn.sync({force: true})
.then(() => hratx42.forEach(model => {
    Model.create({
        name: model.name,
        password: model.password,
        call_time: model.call_time,
        phone: model.phone,
        instagram: model.instagram,
        headshot: model.headshot
    })
}));
  // SELECT name FROM collections WHERE id = 
            // (SELECT collection_id FROM looks WHERE model_uuid = 
            //     (SELECT id FROM models WHERE name = '${name}'))`
