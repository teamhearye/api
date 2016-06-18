var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	university: {
		type: String,
		required: true
	},
	date_created: {
		type: Date,
		default: Date.now()
	}
});

module.exports = {
	User: mongoose.model('User', userSchema)
}

