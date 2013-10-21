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

var term = 2;
var prev_value = '1';
var current_value = '1';
while (current_value.length < 1000) {
  term += 1;
  next_value = longAdd(prev_value, current_value);
  prev_value = current_value;
  current_value = next_value;
}

console.log(term);
