App = Ember.Application.create();

App.Router.map(function() {
	this.resource('words', function() {
		this.resource('word', { path: ':word_id'});
	});
});

App.WordsRoute = Ember.Route.extend({
	model: function() {
		return $.getJSON('/word').then(function(data) {
			return data;
		});
	}
});

App.WordRoute = Ember.Route.extend({
	model: function(params) {
		return words.findBy('_id', params.word_idd)
	}
});
