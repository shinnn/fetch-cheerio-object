function sumValues(baseValue, ...toAdd) {
  var sum = baseValue;
  toAdd.forEach(function(val) {
    sum += val;
  });
  return sum;
}
