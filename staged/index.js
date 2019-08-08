const express = require('express');
const app = express();

const conn = require('./db/conn');
const Model = require('./db/models/Model');
const Backstage = require('./db/models/Backstage');
const Collection = require('./db/models/Collection');
const Designer = require('./db/models/Designer');
const Look = require('./db/models/Look');
const Producer = require('./db/models/Producer');

//const io = require('socket.io')(server);


conn.sync({ logging: false, force: true });

app.listen(3000, () => console.log('server up at 3000!'))