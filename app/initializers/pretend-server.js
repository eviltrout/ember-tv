import Pretender from 'pretender';
import tree from 'ember-tv/fixtures/tree';

export default {
  name: 'pretend-server',
  initialize: function() {
    var server = new Pretender(function() {
      this.get('/api/browse/:item_id', function(request) {
        var item = tree.findById(request.params.item_id);
        return [200, {}, item.toJSON()];
      });
    });
    server.prepareBody = function(body){
      return body ? JSON.stringify(body) : '{"error": "not found"}';
    };
    server.prepareHeaders = function(headers){
      headers['content-type'] = 'application/javascript';
      return headers;
    };
  }
};
