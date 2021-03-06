var makeSideDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.stepSize = Math.floor(Math.random() * 500);
  this.step();
};

makeSideDancer.prototype = Object.create(makeDancer.prototype);
makeSideDancer.prototype.constructor = makeSideDancer;

makeSideDancer.prototype.step = function() {
  // Perform an animation on our node
  this.$node.animate({ left: '+=' + this.stepSize + 'px' }, this.timeBetweenSteps / 2);
  this.$node.animate({ left: '-=' + this.stepSize + 'px' }, this.timeBetweenSteps / 2);
  // Invoke the prototype's step function with this
  makeDancer.prototype.step.call(this);
    // Move node to the right
    // Mode node to the left 
};