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

console.log(getPrimes(1000000)[10000]);