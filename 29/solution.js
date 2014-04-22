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
  if (arguments[0].length > arguments[1].length) {
    var strumber1 = arguments[0];
    var strumber2 = arguments[1];
  } else {
    var strumber1 = arguments[1];
    var strumber2 = arguments[0];
  }
  var carried = 0;
  var to_add = [];
  var shift = 0
  for (var i1 = strumber2.length - 1; i1 >= 0; i1 -= 1) {
    var strumberray = [];
    for (var i = 0; i < shift; i += 1){
      strumberray.push('0');
    }
    for (var i2 = strumber1.length - 1; i2 >= 0; i2 -= 1) {
      var product = parseInt(strumber2[i1], 10) * parseInt(strumber1[i2], 10);
      product += carried;
      var stroduct = product.toString();
      strumberray.push(stroduct[stroduct.length - 1]);
      if (stroduct.length > 1) {
        carried = parseInt(stroduct[0], 10);
      } else {
        carried = 0;
      }
    }
    if (carried) { strumberray.push(carried.toString()); }
    carried = 0
    to_add.push(strumberray.reverse().join(''));
    shift += 1;
  }
  var answer = '0'
  for (var i = 0; i < to_add.length; i += 1) {
    answer = longAdd(answer, to_add[i]);
  }
  return answer;
}

function longExponentiate(base, exponent) {
  exponent = parseInt(exponent, 10);
  base = base.toString();
  for (var i = 0, result = '1'; i < exponent; i += 1) {
    result = longMultiply(result, base);
  }
  return result;
}

function distinctPowers(number) {
  var results = {};
  for (var base = 2; base <= number; base += 1) {
    for (var exponent = 2; exponent <= number; exponent += 1) {
      results[longExponentiate(base, exponent)] = true;
    }
  }
  return Object.keys(results).length;
}

console.log(distinctPowers(100));
