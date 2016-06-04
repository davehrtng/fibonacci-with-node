/*
 * Service for computing fibonacci numbers
 */
function Fibonacci() {

  var sequenceArray = [0, 1, 1, 2];

  /**
  * Return the xth number of the Fibonacci sequence
  */
  this.sequence = function(x) {
    // if invalid, return null
    // to be valid, must be a non-null whole number equal to 1 or greater
    if(!x || x < 1 || x%1 != 0) {
      return null;
    }

    // if they want the 9th fib number, then return the 8th element of the sequence array
    var returnIndex = x - 1;

    // if we've already computed that fib number, just return it
    if(sequenceArray[returnIndex]) {
      return sequenceArray[returnIndex];
    }
    // otherwise, we gotta compute that bad boy
    else {
      sequenceArray[returnIndex] = this.sequence(x - 1) + this.sequence(x - 2);
      return sequenceArray[returnIndex];
    }
  }
}

var fibonacci = new Fibonacci();

module.exports = fibonacci;
