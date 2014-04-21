function distinctPowers(number) {
  var results = {};
  for (var base = 2; base <= number; base += 1) {
    for (var exponent = 2; exponent <= number; exponent += 1) {
      results[Math.pow(base, exponent)] = true;
    }
  }
  return Object.keys(results).length;
}

console.log(distinctPowers(100));
