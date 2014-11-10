import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['remote-target'],

  mouseEnter: function() {
    this.$().focus();
  }
});
