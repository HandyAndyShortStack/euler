function getFactors(target) {
	var factors = [1];
	for (var i = 2; i < Math.sqrt(target); i += 1) {
		if (target % i === 0) {
			factors.push(i);
			factors.push(target / i);
		}
	}
	return factors;
}

var amicable_numbers = [];
for (var candidate = 1; candidate < 10000; candidate += 1) {
	if (amicable_numbers.indexOf(candidate) !== -1) {
		continue;
	}
	var candidate_factors = getFactors(candidate);
	var total = 0
	for (var i = 0; i < candidate_factors.length; i += 1) {
		total += candidate_factors[i];
	}
	var total_factors = getFactors(total);
	var total_total = 0;
	for (var i = 0; i < total_factors.length; i += 1) {
		total_total += total_factors[i];
	}
	if (total_total === candidate && total !== candidate) {
		amicable_numbers.push(total);
		amicable_numbers.push(candidate);
	}
}

var sum = 0
for (var i = 0; i < amicable_numbers.length; i += 1) {
	sum += amicable_numbers[i];
}

console.log(sum);