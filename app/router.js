import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('browse', {path: '/browse'}, function() {
    this.route('show', {path: '/:item_id'});
  });
});

export default Router;
