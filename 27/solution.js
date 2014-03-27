function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (i = 2; i < Math.ceil(Math.sqrt(number)); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function result(a, b, n) {
  return Math.pow(n, 2) + (a * n) + b;
}

function findNumberOfPrimes(a, b) {
  for (var i = 0; isPrime(result(a, b, i)); i += 1) {
    void 0;
  }
  return i;
}

var mostPrimes = 0;
var product = 0;
for (var a = -999; a < 1000; a += 1) {
  for (var b = -999; b < 1000; b += 1) {
    var numberOfPrimes = findNumberOfPrimes(a, b);
    if (numberOfPrimes > mostPrimes) {
      mostPrimes = numberOfPrimes;
      product = a * b;
    }
  }
}

console.log(product);
