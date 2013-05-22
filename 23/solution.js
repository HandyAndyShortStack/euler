function getFactors(target) {
	var factors = [1];
	var square_root = Math.sqrt(target);
	for (var i = 2; i < square_root; i += 1) {
		if (target % i === 0) {
			factors.push(i);
			factors.push(target / i);
		}
	}
	if (square_root % 1 === 0) { factors.push(square_root); }
	return factors;
}

var abundant_numbers = [];
for (var i1 = 12; i1 < 28132; i1 += 1) {
	var factors = getFactors(i1);
	var sum = 0;
	for (var i2 = 0; i2 < factors.length; i2 += 1) {
		sum += factors[i2];
	}
	if (sum > i1) { abundant_numbers.push(i1); }
}

var field = {};
for (var i = 1; i < 28132; i += 1) {
	field[i] = true;
}

for (var i1 = 0; i1 < abundant_numbers.length; i1 += 1) {
	for (var i2 = 0; i2 < abundant_numbers.length; i2 += 1) {
		field[abundant_numbers[i1] + abundant_numbers[i2]] = false;
	}
}

var total = 0;
for (var i = 0; i < 28132; i += 1) {
	if (field[i]) { total += i; }
}

console.log(total);