console.log((function getPythagoreanTripleProduct(sum) {
	for (var a = 1; a < sum; a += 1) {
		for (var b = 1; b < sum; b += 1) {
			c = sum - a - b;
			if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
				return a * b * c;
			}
		}
	}
})(1000));