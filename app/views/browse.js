import Ember from 'ember';

export default Ember.View.extend({
  _focusFirst: function() {
    this.$('.remote-target:first').focus();
  }.on('didInsertElement')
});
