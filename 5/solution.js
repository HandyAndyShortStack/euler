function isPrime(number) {
	for (var i = 2; i < number; i += 1) {
		if (number % i === 0) {
			return false;
		}
	}
	return true;
}

primes = [];
for (var i = 2; i < 21; i += 1) {
	if (isPrime(i)) {
		primes.push(i);
	}
}

lcm = 1 // lcm => lowest common multiple

for (var i = 0; i < primes.length; i += 1) {
	occurrences = Math.floor(Math.log(20) / Math.log(primes[i]));
	lcm = lcm * Math.pow(primes[i], occurrences);
}

console.log(lcm);