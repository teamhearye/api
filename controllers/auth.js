var jwt = require('jwt-simple');

var auth = {
	login: function(req, res) {
		var username = req.body.username || '';
		var password = req.body.password || '';
	}

	// @if: username or password is empty, throw 401 error
	if (username == '' || password == '') {
		res.status(401);
		res.json({
	        "status": 401,
	        "message": "Invalid credentials: You don't have permission to proceed."
      	});
      	return;
	}

	// otherwise, validate the given credentials
	var given_user = auth.validate(username, password);


}

generateToken: function(user) {
	var expiration_date = expiresIn(7);
	var token = jwt.encode({
		exp: expiration_date
	}, require('../config/secret')());

	return {
		token: token,
		expiration_date: expiration_date,
		user: user
	};
}

expiresIn: function(number_of_days) {
	var date = new Date();
	return date.setDate(date.getDate() + number_of_days);
}