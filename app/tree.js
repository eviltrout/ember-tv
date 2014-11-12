var lastId = 1,
    _lookup = {};

var Item = function(attrs) {
  this.name = attrs.name;
  this.id = attrs.id || (lastId++);
  this.image = attrs.image;
  this.children = [];
  _lookup[this.id] = this;
};

Item.prototype.findById = function(id) {
  return _lookup[id];
};

Item.prototype.addChild = function(item, image) {
  if (typeof item === "string") {
    item = new Item({name: item, image: image});
  }
  _lookup[item.id] = item;
  this.children.push(item);
  item.parent = this;
  return item;
};

Item.prototype.simpleJSON = function() {
  return {id: this.id, name: this.name, image: this.image};
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

var shows = root.addChild("TV Shows", '/assets/images/tv.png');
shows.addChild('Key & Peele', '/assets/images/keypeele.jpg');
shows.addChild('Adventure Time', '/assets/images/adventure.jpg');
shows.addChild('Broad City', '/assets/images/broad.jpg');
shows.addChild('Last Week Tonight', '/assets/images/oliver.jpg');

var movies = root.addChild("Movies", '/assets/images/movies.png');
movies.addChild("Skyfall", '/assets/images/skyfall.jpg');
movies.addChild("Maleficent", '/assets/images/maleficent.jpg');
movies.addChild("Django Unchained", '/assets/images/django.jpg');

var music = root.addChild("Music", '/assets/images/music.png');
music.addChild("CHVRCHES", '/assets/images/chvrches.png');
music.addChild("Passenger", '/assets/images/passenger.png');
music.addChild("Taylor Swift", '/assets/images/taylor.png');
music.addChild("Twin Shadow", '/assets/images/twin.png');
music.addChild("Hot Chip", '/assets/images/hotchip.png');

export default root;
