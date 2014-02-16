/**
 * UserController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
 
	// request is what is requested, responsre is what you respond. and next 
	// is what you would do if you didn't want to do anything specific  
	login: function(req, res, next) { 

		var email = req.param("email")
		var password = req.param ("password")

		if (!email || !password) { 
			return res.json({ 	
				error: "Give me a password! NOW!"
			})
		}
		// this finds a user, where we are looking for a user whose email address matches
		// the email address that we have give through login 
		// after you are /done then can either return an error or  a user 
		User.findOne({ email: email}).done(function(err, user)) { 
				// error is only something that is returned if something 
				if (err) { 
					res.send(500, {error: "DB Error"}); 
				} else {  

					if(user) {
						// Validate that the password is true, and then we can directly compare two functions 
						// can either return three things an error a result or a password 
						bcrypt.compare(password, user.encryptedPassword, function(err, result)) { 

							if (result) { 
								req.session.user = user; 
								res.redirect('/');	
							}


							else { 

								res.view({
									error: "Wrong Password"
								});		


							}	
						}
					}
					else {
						res.view({
							error: "Email not found"
						});
					}
				}
		}
	}


  _config: {}

  
};
