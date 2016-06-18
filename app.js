'use strict';

require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

var mongoose = require('mongoose');

// Connect to database with mongoose
mongoose.connect(process.env.DB);
var db = mongoose.connection;

var Models = require('./models/init');

app.get('/', function(req, res) {
	res.send('Welcome to the HearYe API. Navigate to /api/events or /api/users to retrieve rad data!');
});

var EventRouter = express.Router();
app.use('/api/events', EventRouter);

EventRouter.get('/', function(req, res) {
	Models.Event.getEvents(function(err, event) {
		if (err) {
			throw err;
		}
		res.json(event);
	})
});

EventRouter.post('/', function(req, res) {
	var newEvent = req.body;
	Models.Event.addEvent(newEvent, function(err, newEvent) {
		if (err) {
			throw err;
		}
		res.json(newEvent);
	})
});

EventRouter.get('/:_id', function(req, res) {
	Models.Event.getEventById(req.params._id, function(err, event) {
		if (err) {
			throw err;
		}
		res.json(event);
	});
});

EventRouter.put('/:_id', function(req, res) {
	var id = req.params._id;
	var event = req.body;
	Models.Event.updateEvent(id, event, {}, function(err, event) {
		if (err) {
			throw err;
		}
		res.json(event);
	});
});

EventRouter.delete('/:_id', function(req, res) {
	var id = req.params._id;
	Models.Event.deleteEvent(id, function(err, event) {
		if (err) {
			throw err;
		}
		res.json(event);
	});
});

var UserRouter = express.Router();
app.use('/api/users', UserRouter);

UserRouter.get('/', function(req, res, next) {
	Models.User.getUsers(function(err, user) {
		if (err) {
			throw err;
		}
		res.json(user)
	})
});

UserRouter.post('/', function(req, res) {
	var newUser = req.body;
	Models.User.addUser(newUser, function(err, newUser) {
		if (err) {
			throw err;
		}
		res.json(newUser);
	})
});

UserRouter.get('/:_id', function(req, res) {
	Models.User.getUserById(req.params._id, function(err, user) {
		if (err) {
			throw err;
		}
		res.json(user);
	});
});

UserRouter.put('/:_id', function(req, res) {
	var id = req.params._id;
	var user = req.body;
	Models.User.updateUser(id, user, {}, function(err, user) {
		if (err) {
			throw err;
		}
		res.json(user);
	});
});

UserRouter.delete('/:_id', function(req, res) {
	var id = req.params._id;
	Models.User.deleteUser(id, function(err, user) {
		if (err) {
			throw err;
		}
		res.json(user);
	});
});

// Start Server
var port = process.env.PORT || 1738;
app.listen(port);
console.log('Express server is currently running on port ' + port);