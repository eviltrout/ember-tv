import RemoteTarget from 'ember-tv/components/remote-target';

export default RemoteTarget.extend({
  classNames: ['tv-button'],
  tagName: 'button',

  click: function() {
    this.sendAction('action', this.get('param'));
  },

  render: function(buffer) {
    buffer.push(this.get('label'));
  }
});
