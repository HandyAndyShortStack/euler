function collatzSequenceLength(target, length) {
	if (typeof(length) === 'undefined') { var length = 0; }
	length += 1;
	if (target === 1) {
		return length;
	} else if (target % 2 === 0) {
		return collatzSequenceLength(target / 2, length);
	} else {
		return collatzSequenceLength(target * 3 + 1, length);
	}
}

var longest_sequence = 0;
solution = 0;
for (var i = 1; i < 1000000; i += 1) {
	length = collatzSequenceLength(i);
	if (length > longest_sequence) {
		longest_sequence = length;
		solution = i;
	}
}

console.log(solution);