import Ember from 'ember';

export default Ember.View.extend({
  focusClosest: function(where) {
    // Find current element
    var $elem = this.$('.remote-target:focus');
    if ($elem.length) {
      // Find Element's position
      var elemPos = $elem.position(),
          closest,
          minDistance = 100000000000;

      this.$('.remote-target').not($elem).each(function(idx, e) {
        var $e = Ember.$(e),
            notPos = $e.position();

        if (where(elemPos, notPos)) {
          var distance = Math.sqrt(Math.pow(elemPos.top - notPos.top, 2) + Math.pow(elemPos.left - notPos.left, 2));
          if (distance < minDistance) {
            minDistance = distance;
            closest = $e;
          }
        }
      });
      if (closest) { closest.focus(); }
    }
  },

  keyUp: function(e) {
    switch (e.keyCode) {
      case 74:
      case 40:
        // down
        this.focusClosest(function(p1, p2) { return (p2.top > p1.top); });
        break;
      case 75:
      case 38:
        // up
        this.focusClosest(function(p1, p2) { return (p1.top > p2.top); });
        break;
    }
  }
});
