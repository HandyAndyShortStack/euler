function longAdd() {
	if (arguments[0].length > arguments[1].length) {
		var strumber1 = arguments[0];
		var strumber2 = arguments[1];
	} else {
		var strumber1 = arguments[1];
		var strumber2 = arguments[0];
	}
	while (strumber1.length > strumber2.length) {
		strumber2 = strumber2.split('').reverse();
		strumber2.push('0');
		strumber2 = strumber2.reverse().join('');
	}
	var carried = 0;
	var strumberray = []
	for (var i = strumber1.length - 1; i >= 0; i -= 1) {
		var sum = carried;
		sum += parseInt(strumber1[i], 10);
		sum += parseInt(strumber2[i], 10);
		var strum = sum.toString();
		strumberray.push(strum[strum.length - 1]);
		if (strum.length > 1) {
			carried = 1;
		} else {
			carried = 0;
		}
	}
	if (carried) { strumberray.push('1'); }
	return strumberray.reverse().join('');
}

function longMultiply() {
	var total = '0';
	for (var i = 0; i < parseInt(arguments[0], 10); i += 1) {
		total = longAdd(total, arguments[1]);
	}
	return total;
}

var total = '1';
for (var i = 1; i <= 100; i += 1) {
	total = longMultiply(total, i.toString());
}

console.log(total);