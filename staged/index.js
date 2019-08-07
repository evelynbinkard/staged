const express = require('express');
const app = express();

const conn = require('./db/conn');
//const io = require('socket.io')(server);


conn.sync({ logging: false, force: true });

app.listen(3000, () => console.log('server up at 3000!'))