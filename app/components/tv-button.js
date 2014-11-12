import RemoteTarget from 'ember-tv/components/remote-target';

export default RemoteTarget.extend({
  classNames: ['tv-button'],
  tagName: 'button',

  click: function() {
    this.sendAction('clickAction', this.get('item'));
  },

  focusIn: function() {
    this.sendAction('hoverAction', this.get('item'));
  },

  render: function(buffer) {
    buffer.push(this.get('label'));
  }
});
