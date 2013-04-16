var fib = [1, 1];

(function populateFib() {
	var next_term = fib[fib.length - 1] + fib[fib.length - 2];
	if (next_term > 4000000) { 
		return;
	} else {
		fib.push(next_term);
		populateFib();
	}
})();

var total = 0
for (i = 0; i < fib.length; i += 1) {
	if (fib[i] % 2 === 0) {
		total += fib[i];
	}
}

console.log(total);