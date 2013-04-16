function isPalindrome(candidate) {
	candidate = candidate.toString();
	if (candidate == '') {
		return true;
	} else if (candidate[0] !== candidate[candidate.length - 1]) {
		return false;
	} else {
		return isPalindrome(candidate
			.split('')
			.slice(1, candidate.length - 1)
			.join('')
		);
	}
}

var highestPalendromicMultiple = 0;

for (i1 = 100; i1 < 1000; i1 += 1) {
	for (i2 = i1; i2 < 1000; i2 += 1) {
		var candidate = i1 * i2;
		if (isPalindrome(candidate) && candidate > highestPalendromicMultiple) {
			highestPalendromicMultiple = candidate;
		}
	}
}

console.log(highestPalendromicMultiple);