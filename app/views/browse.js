import Ember from 'ember';

export default Ember.View.extend({
  _focusFirst: function() {
    var $target = this.$('.remote-target:first');
    if ($target) {
      $target.focus();
    }
  },

  _elementInserted: function() {
    Ember.run.scheduleOnce('afterRender', this, '_focusFirst');
  }.on('didInsertElement'),

  _modelChanged: function() {
    Ember.run.scheduleOnce('afterRender', this, '_focusFirst');
  }.observes('controller.model')

});
