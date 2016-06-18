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

module.exports = {
	Event: mongoose.model('Event', eventSchema)
}
