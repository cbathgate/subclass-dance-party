var pokemonList = ['pikachu', 'chikorita', 'spinda', 'gyarados', 'dragonite', 'chandelure', 'squirtle','milotic', 'snorlax', 'exeggutor' ];
var makePokemonDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.name = pokemonList[Math.floor(Math.random() * pokemonList.length)];
  var path = './lib/pokemon/' + this.name + '.gif';
  var img = '<span><img class= "pokemon" src= "' + path + '"></span>';
  this.$node = $(img);
  this.setPosition();
};

makePokemonDancer.prototype = Object.create(makeDancer.prototype);
makePokemonDancer.prototype.constructor = makePokemonDancer;

// makePokemonDancer.prototype.lineUp = function(order) {

// };

makePokemonDancer.prototype.setPosition = function() {
  var styleSettings = {
    top: this.top,
    left: this.left,
    position: 'absolute'
  };
  this.$node.css(styleSettings);
};