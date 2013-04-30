function getFactors(target) {
	var factors = [];
	for (var i = 0; i < Math.sqrt(target); i += 1) {
		if (target % i === 0) {
			factors.push(i);
			factors.push(target / i);
		}
	}
	return factors;
}

var done = false;
var term = 0;
var triangle_number = 0;
while (!done) {
	term += 1;
	triangle_number += term;
	if (getFactors(triangle_number).length > 500) {
		done = true;
	}
}

console.log(triangle_number);