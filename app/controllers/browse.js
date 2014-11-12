import Ember from 'ember';

export default Ember.ObjectController.extend({
  previewItem: null,

  actions: {
    showItem: function(it) {
      this.transitionToRoute('browse', it.id);
    },

    clearPreview: function() {
      this.set('previewItem', null);
    },

    previewItem: function(it) {
      this.set('previewItem', it);
    }
  }
});
