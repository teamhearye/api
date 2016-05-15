'use strict';

require('dotenv').config();
var express = require('express');
var app = express();
var APIRouter = express.Router();
var _ = require('underscore');
var bodyParser = require('body-parser');

// All post requests are in JSON format 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


// The HearYe API lives here :)
app.use('/api', APIRouter);

APIRouter.get('/', function(req, res, next) {
  res.send("Hey it's me, your brother");
});

// Start Server
var port = process.env.PORT || 1738;
app.listen(port);
console.log('Express is currently running on port ' + port);