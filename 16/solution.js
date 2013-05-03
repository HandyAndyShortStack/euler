function getDigitLength(number) {
	var digits = 0;
	while (Math.pow(10, digits) <= number) {
		digits += 1;
	}
	return digits;
}

function chopFirstDigit(number) {
	var left_digit = parseInt(number.toString()[0]);
	return number - (left_digit * Math.pow(10, getDigitLength(number) - 1));
}

function getDigit(index) {
	var working_number = 2;
	for (var i = 0; i < 999; i += 1) {
		working_number = working_number * 2;
		if (working_number >= Math.pow(10, index)) {
			working_number = chopFirstDigit(working_number);
		}
	}
	if (working_number < Math.pow(10, index - 1)) {
		return 0;
	}
	return parseInt(working_number.toString()[0]);
}

var sum = '';
digit_length = getDigitLength(Math.pow(2, 1000));
for (var i = 1; i <= digit_length; i += 1) {
	sum += getDigit(i);
}

console.log(sum.split("").reverse().join(""));