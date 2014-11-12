import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
  model: function(params) {
    return ajax("/api/browse/" + params.item_id);
  },

  actions: {
    showItem: function(it) {
      this.transitionTo('browse', it.id);
    }
  }
});
