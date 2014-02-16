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
    
  }

};
