function getFactors(target) {
	factors = [];
	for (var i = 0; i < Math.sqrt(target); i += 1) {
		if (target % i === 0) {
			factors.push(i);
			factors.push(target / i);
		}
	}
	return factors;
}

done = false;
term = 0;
triangle_number = 0;
while (!done) {
	term += 1;
	triangle_number += term;
	if (getFactors(triangle_number).length > 500) {
		done = true;
	}
}

console.log(triangle_number);