var strumberray = ['2'];
var carried = 0;
for (var i = 0; i < 999; i += 1) {
	for (var index = 0; index < strumberray.length; index += 1) {
		var product = parseInt(strumberray[index], 10) * 2;
		product += carried;
		carried = 0;
		if (product >= 10) {
			product -= 10;
			carried = 1;
		}
		strumberray[index] = product.toString();
	}
	if (carried) {
		strumberray[strumberray.length] = carried.toString();
		carried = 0;
	}
}

var sum = 0;
for (var i = 0; i < strumberray.length; i += 1) {
	sum += parseInt(strumberray[i], 10);
}

console.log(sum);