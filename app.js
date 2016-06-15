'use strict';

require('dotenv').config();
var express = require('express');
var app = express();
var _ = require('underscore');
var bodyParser = require('body-parser');

// All post requests are in JSON format 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


var EventRouter = express.Router();
app.use('/api/events', EventRouter);

EventRouter.get('/', function(req, res, next) {
  res.json({ message: "Events are here!" });
});

var UserRouter = express.Router();
app.use('/api/users', UserRouter);

UserRouter.get('/', function(req, res, next) {
  res.json({ message: "Users are here!" });
});

UserRouter.post('/', function(req, res, next) {
	// Controllers.Users.create(req, res);
});

// Start Server
var port = process.env.PORT || 1738;
app.listen(port);
console.log('Express is currently running on port ' + port);