var target = 600851475143;

console.log((function findLargestPrimeFactor(target) {
	var i = 1;
	while (i < target) {
		i += 1;
		if (target % i === 0 && i < target) {
			return findLargestPrimeFactor(target / i);
		}
	}
	return target;
})(target));