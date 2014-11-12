import Pretender from 'pretender';
import tree from 'ember-tv/tree';

export default {
  name: 'pretend-server',
  initialize: function() {
    new Pretender(function() {
      this.get('/api/browse/:item_id', function(request) {
        var item = tree.findById(request.params.item_id);
        return [200, {'content-type': 'application/json'}, JSON.stringify(item.toJSON())];
      });
    });
  }
};
