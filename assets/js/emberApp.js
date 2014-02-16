App = Ember.Application.create();

App.Router.map(function() {
	this.resource('words');
});

App.WordsRoute = Ember.Route.extend({
	model: function() {
		return $.getJSON('/word').then(function(data) {
			return data;
		});
	}
});