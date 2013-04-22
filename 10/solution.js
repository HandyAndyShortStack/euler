function getPrimes(range_size) {
	var primes = [];
	var range = {};
	for (var i = 0; i < range_size; i += 1) {
		range[i] = true;
	}
	for (var i = 2; i < range_size; i += 1) {
		if (range[i]) {
			primes.push(i);
			for (var multiple = i; multiple < range_size; multiple += i) {
				range[multiple] = false;
			}
		}
	}
	return primes;
}

var primes = getPrimes(2000000)
sum = 0;
for (var i = 0; i < primes.length; i += 1) {
	sum += primes[i];
}

console.log(sum);