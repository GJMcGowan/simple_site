"use strict";

const express = require('express');
const app = express();
var server = require('http').createServer(app);

app.use(express.static('public'));
app.use('/node_modules',  express.static(__dirname + '/node_modules'));

// Port is either from environment or a default
app.set('port', (process.env.PORT || 5000));

// Have to set basic render engine
app.set('view engine', 'ejs');

// Sets basic route
app.get('/', function (request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = server;
