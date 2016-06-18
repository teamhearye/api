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

var Controllers = require('./controllers/init');

app.get('/', function(req, res) {
	res.send('Welcome to the HearYe API. Navigate to /api/events or /api/users to retrieve rad data!');
});

var EventRouter = express.Router();
app.use('/api/events', EventRouter);

EventRouter.get('/', function(req, res) {
	Controllers.Event.getEvents(function(err, event) {
		if (err) {
			throw err;
		}
		res.json(event);
	})
});

EventRouter.post('/', function(req, res) {
	var newEvent = req.body;
	Controllers.Event.addEvent(newEvent, function(err, newEvent) {
		if (err) {
			throw err;
		}
		res.json(newEvent);
	})
});

EventRouter.get('/:_id', function(req, res) {
	Controllers.Event.getEventById(req.params._id, function(err, event) {
		if (err) {
			throw err;
		}
		res.json(event);
	});
});

EventRouter.put('/:_id', function(req, res) {
	var id = req.params._id;
	var event = req.body;
	Controllers.Event.updateEvent(id, event, {}, function(err, event) {
		if (err) {
			throw err;
		}
		res.json(event);
	});
});

EventRouter.delete('/:_id', function(req, res) {
	var id = req.params._id;
	Controllers.Event.deleteEvent(id, function(err, event) {
		if (err) {
			throw err;
		}
		res.json(event);
	});
});

var UserRouter = express.Router();
app.use('/api/users', UserRouter);

UserRouter.get('/', function(req, res, next) {
	Controllers.User.getUsers(function(err, user) {
		if (err) {
			throw err;
		}
		res.json(user)
	})
});

UserRouter.post('/', function(req, res) {
	var newUser = req.body;
	Controllers.User.addUser(newUser, function(err, newUser) {
		if (err) {
			throw err;
		}
		res.json(newUser);
	})
});

UserRouter.get('/:_id', function(req, res) {
	Controllers.User.getUserById(req.params._id, function(err, user) {
		if (err) {
			throw err;
		}
		res.json(user);
	});
});

UserRouter.put('/:_id', function(req, res) {
	var id = req.params._id;
	var user = req.body;
	Controllers.User.updateUser(id, user, {}, function(err, user) {
		if (err) {
			throw err;
		}
		res.json(user);
	});
});

UserRouter.delete('/:_id', function(req, res) {
	var id = req.params._id;
	Controllers.User.deleteUser(id, function(err, user) {
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