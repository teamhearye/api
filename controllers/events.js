var mongoose = require('mongoose');
var EventModel = require('../models/event');

// GET all events
module.exports.getEvents = function(cb, limit) {
	EventModel.Event.find(cb).limit(limit);
}

// GET event By ID
module.exports.getEventById = function(id, cb) {
	EventModel.Event.findById(id, cb);
}

// ADD event
module.exports.addEvent = function(event, cb) {
	EventModel.Event.create(event, cb);
}

// DELETE event by ID
module.exports.deleteEvent = function(id, cb) {
	var query = { _id: id };
	EventModel.Event.remove(query, cb);
}

// UPDATE event by ID
module.exports.updateEvent = function(id, event, options, cb) {
	var query = { _id: id };
	var updated_event = {
		title: event.title,
		description: event.description,
		author: event.author,
		date_of_event: event.date_of_event,
		time_of_event: event.time_of_event,
		cost: event.cost
	};
	EventModel.Event.findOneAndUpdate(query, updated_event, options, cb);
}
