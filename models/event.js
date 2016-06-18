var mongoose = require('mongoose');

// TODO: Add tags, organization attributes, attending, watching, etc.
var eventSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	},
	date_created: {
		type: Date,
		default: Date.now()
	},
	date_of_event: {
		type: String,
		required: true
	},
	time_of_event: {
		type: String,
		required: true
	},
	cost: {
		type: Number,
		default: 0
	}
});

var Event = module.exports = mongoose.model('Event', eventSchema);

// GET all events
module.exports.getEvents = function(cb, limit) {
	Event.find(cb).limit(limit);
}

// GET event By ID
module.exports.getEventById = function(id, cb) {
	Event.findById(id, cb);
}

// ADD event
module.exports.addEvent = function(event, cb) {
	Event.create(event, cb);
}

// DELETE event by ID
module.exports.deleteEvent = function(id, cb) {
	var query = { _id: id };
	Event.remove(query, cb);
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
	Event.findOneAndUpdate(query, updated_event, options, cb);
}

