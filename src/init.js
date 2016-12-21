$(document).ready(function() {
  window.dancers = [];
  
  var distance = function(obj1, obj2) {
    return Math.sqrt(Math.pow((obj2.y - obj1.top), 2) + Math.pow((obj2.x - obj1.left), 2));
  };

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 2000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineDance').on('click', function(event) {
    var row = 0;
    var col = 30; 
    for (var i = 0; i < window.dancers.length; i++) {
      if ( ((100 * row) - 30) > $('body').height()) {
        row = 0;
        col += 200;
      }
      window.dancers[i].lineUp(row, col);
      row++;
    }
  });

  $('body').on('mouseover', '.dancer', function(event) {
    var $this = $(this);
    if ($this.hasClass('pokemon') ) {
      $this.animate({width: '200px'});
    }
    if ($this.hasClass('simple')) {
      $this.animate({width: '100px', height: '100px', 'border-radius': '50px'});
    }
  });

  $('body').on('click', '.dancer', function(event) {
    var $this = $(this)[0];
    // console.log($this.x);
    // console.log($this.y);
    var closest = window.dancers[0];

    for (var i = 0; i < window.dancers.length; i++) {
      if ($this.x === Math.floor(window.dancers[i].left) && $this.y === Math.floor(window.dancers[i].top)) {
        continue;
      }
      if (distance(closest, $this) > distance(window.dancers[i], $this)) {
        closest = window.dancers[i];
      }
    }
    

    var row = 0;
    var col = 30;
    for (var j = 0; j < window.dancers.length; j++) {
      if (($this.x === Math.floor(window.dancers[j].left) && $this.y === Math.floor(window.dancers[j].top)) || (closest.left === window.dancers[j].left && closest.top === window.dancers[j].top)) {
        continue;
      }
      if ( ((100 * row) - 30) > $('body').height()) {
        row = 0;
        col += 200;
      }
      window.dancers[j].lineUp(row, col);
      row++;
    }

  });

});

