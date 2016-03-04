"use strict";

const express = require('express');
const app = express();

// Port is either from environment or a default
app.set('port', (process.env.PORT || 5000));

// Have to set basic render engine
app.set('view engine', 'ejs');

// Sets basic routes
app.get('/', function (request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
