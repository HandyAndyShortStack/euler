var sum = 0;
var sum_of_squares = 0;

for (var i = 0; i < 101; i += 1) {
	sum += i;
	sum_of_squares += Math.pow(i, 2);
}

console.log(Math.pow(sum, 2) - sum_of_squares);