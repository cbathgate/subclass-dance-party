describe('pokemonDancer', function() {

  var pokemonDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    pokemonDancer = new makePokemonDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(pokemonDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a prototype with a constructor that points to makePokemonDancer', function() {
    expect(pokemonDancer instanceof makePokemonDancer).to.be.true;
  });

});