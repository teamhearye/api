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

var User = module.exports = mongoose.model('User', userSchema);

// GET all users
module.exports.getUsers = function(cb, limit) {
	User.find(cb).limit(limit);
}

// GET user By ID
module.exports.getUserById = function(id, cb) {
	User.findById(id, cb);
}

// ADD user
module.exports.addUser = function(user, cb) {
	User.create(user, cb);
}

// DELETE user by ID
module.exports.deleteUser = function(id, cb) {
	var query = { _id: id };
	User.remove(query, cb);
}

// UPDATE user by ID
module.exports.updateUser = function(id, user, options, cb) {
	var query = { _id: id };
	var updated_user = {
		name: user.name,
		email: user.email,
		university: user.university
	};
	User.findOneAndUpdate(query, updated_user, options, cb);
}

