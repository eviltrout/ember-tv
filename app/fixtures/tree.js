var lastId = 1,
    _lookup = {};

var Item = function(attrs) {
  this.name = attrs.name;
  this.id = attrs.id || (lastId++);
  this.children = [];
  _lookup[this.id] = this;
};

Item.prototype.findById = function(id) {
  return _lookup[id];
};

Item.prototype.addChild = function(item) {
  if (typeof item === "string") {
    item = new Item({name: item});
  }
  _lookup[item.id] = item;
  this.children.push(item);
  item.parent = this;
  return item;
};

Item.prototype.simpleJSON = function() {
  return {id: this.id, name: this.name};
};

Item.prototype.toJSON = function() {
  var result = this.simpleJSON();
  result.children = this.children.map(function(c) {
    return c.simpleJSON();
  });

  if (this.parent) {
    result.parent = this.parent.simpleJSON();
  }
  return result;
};

var root = new Item({ name: "Browse", id: "root" });

var shows = root.addChild("TV Shows");
shows.addChild('Key & Peele');
shows.addChild('Sherlock');
shows.addChild('True Detective');
shows.addChild('Fargo');
shows.addChild('Broad City');
shows.addChild('Last Week Tonight');

var movies = root.addChild("Movies");
movies.addChild("Nightcrawler");
movies.addChild("Interstellar");
movies.addChild("Gone Girl");
movies.addChild("Big Hero Six");
movies.addChild("Guardians of the Galaxy");

root.addChild("Music");

export default root;
