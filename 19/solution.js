var total = 0;
for (var year = 1901; year < 2001; year += 1) {
	for (var month = 0; month < 12; month += 1) {
		if (new Date(year, month, 1).getDay() === 0) {
			total += 1;
		}
	}
}

console.log(total);