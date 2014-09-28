function *squareMaker() {
  var curVal = 1;
  while (true) {
    yield curVal * curVal;
  }
}

var squares = squareMaker();
console.log(squares.next().value);
console.log(squares.next().value);
console.log(squares.next().value);
console.log(squares.next().value);
