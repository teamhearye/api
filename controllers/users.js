var mongoose = require('mongoose');
var UserModel = require('../models/user');

// GET all users
module.exports.getUsers = function(cb, limit) {
	UserModel.User.find(cb).limit(limit);
}

// GET user By ID
module.exports.getUserById = function(id, cb) {
	UserModel.User.findById(id, cb);
}

// ADD user
module.exports.addUser = function(user, cb) {
	UserModel.User.create(user, cb);
}

// DELETE user by ID
module.exports.deleteUser = function(id, cb) {
	var query = { _id: id };
	UserModel.User.remove(query, cb);
}

// UPDATE user by ID
module.exports.updateUser = function(id, user, options, cb) {
	var query = { _id: id };
	var updated_user = {
		name: user.name,
		email: user.email,
		university: user.university
	};
	UserModel.User.findOneAndUpdate(query, updated_user, options, cb);
}
