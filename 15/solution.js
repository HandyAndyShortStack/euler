function factorial(number) {
	var total = 1;
	for (var i = 1; i <= number; i += 1) {
		total = total * i;
	}
	return total;
}

console.log(factorial(40) / Math.pow(factorial(20), 2));