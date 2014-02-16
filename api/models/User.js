/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */
var bcrypt = require('bcrypt');

module.exports = {

	schema: true,

	attributes: {
		
		email: {
			type: 'string',
			email: true,
			required: true,
			unique: true
		},

		encryptedPassword: {
			type: 'string'
		},
		
		toJSON: function() {
			var obj = this.toObject();
			delete obj.encryptedPassword;
			return obj
		}
	},

	beforeCreate: function(values, next) {
		// Checks to make sure password and password confirmation match before creating record
		if (!values.password || values.password != values.passwordConfirmation) {
			return next({err: ["Password doesn't match password confirmation"]});
		}

		bcrypt.genSalt(10, function(err, salt) {
			if (err) return next(err);

			bcrypt.hash(values.password, salt, function(err, encryptedPassword) {
				if (err) return next(err);

				values.encryptedPassword = encryptedPassword;
				next();
			});
		});
	},

};
