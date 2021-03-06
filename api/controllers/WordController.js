/**
 * WordController
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
    
  search: function(req, res, next) {
  	var term = req.param("term")

  	Word.findOne({term: term}).done(function(err, word) {
  		if (word) {
  		return res.view({term: word.term, link: word.link,
  			english_def: word.english_def, kiswahili_def: word.kiswahili_def});
  		}

  		return res.json({error: "Sorry, we could not find the word you're looking for"})	
  	})
  },

  upload: function(req, res, next) {
  	res.view()
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to WordController)
   */
  _config: {}

  
};
