import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.$.ajax("/api/browse/" + params.item_id);
  }
});
