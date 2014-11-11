var lastId = 1;

var Item = function(name) {
  this.name = name;
  this.id = lastId++;
  this.children = [];
};

var tree = new Item("Root");

Item.prototype.findById = function(id) {
  return tree;
};

Item.prototype.toJSON = function() {
  return {id: this.id, name: this.name};
};


export default tree;
