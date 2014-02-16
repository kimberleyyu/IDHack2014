/**
 * Word
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	
  	term: {	
  		type: 'string',
  		required: true
  	},

  	english_def: {
  		type: 'string',
  		maxLength: 400
  	},

  	kiswahili_def: {
  		type: 'string',
  		maxLength: 400
  	},

  	link: {
  		type: 'string',
  		required: true
  	},

  	tags: {
  		type: 'array'
  	}
    
  },

  beforeCreate: function(values, next) {
    // call values because beforeCreate calls for the input of attributes
    id = validateYoutube(values.link)
    if (!id) { 
      return next({err: ["This link isn't valid!"]});
    }
    values.link = id;
    next();
  }
};

function validateYoutube(url) {
  var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
 return (url.match(p)) ? RegExp.$1 : false;

}
