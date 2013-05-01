function getDigitLength(number) {
	var digits = 0;
	while (Math.pow(10, digits) <= number) {
		digits += 1;
	}
	return digits;
}

digit_sum = 0;
working_number = Math.pow(2, 1000);
while (working_number) {
	left_digit = parseInt(working_number.toString()[0], 10);
	working_number -= left_digit * Math.pow(10, getDigitLength(working_number) - 1);
	digit_sum += left_digit;
}

console.log(digit_sum);