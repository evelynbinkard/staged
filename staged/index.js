const express = require('express');
const app = express();
const Sequelize = require('Sequelize')

const conn = require('./db/conn');

//const Model = require('./db/models/Model');
// const Backstage = require('./db/models/Backstage');
// const Collection = require('./db/models/Collection');
// const Designer = require('./db/models/Designer');
// const Look = require('./db/models/Look');
// const Producer = require('./db/models/Producer');

//const io = require('socket.io')(server);
app.post('/markpresent/:name', (req, res) => {
    const name = req.params.name
    conn.markPresent(name)
    conn.getUsers()
    .then(results => res.json(results))
    .catch(err => 'another err in server')
})
app.get('/checkin', (req, res) => {
    conn.getUsers()
    .then(results => res.json(results))
    .catch(err => 'in server')
})

app.get('/designers/:name', (req, res) => {
    const name = req.params.name;
   
    conn.getDesigners(name)
    .then(results => res.json(results.rows))
    .catch(err => console.log(err))
})

app.get('/collectionmodels/:designername', (req, res) => {
    const designer = req.params.designername;

    conn.getModels(designer)
    .then(results => console.log(results.rows))
})
//conn.sync({ logging: false, force: true });



app.listen(3000, () => console.log('server up at 3000!'))