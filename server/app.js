'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var config = require('./config');

var app = express();
var http = require('http');

require('./config/express')(app);
require('./routes')(app);

http.createServer(app).listen(config.port,
  function () {
    console.log('Express server listening on %d, in %s mode', config.port,
                                                              app.get('env'));
  }
);

// Expose app
exports = module.exports = app;
