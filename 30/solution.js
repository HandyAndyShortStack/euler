var total = 0;

for (var i = 2; i < 999999; i += 1) {
  var strumberray = i.toString().split('');
  var uberHyperCubeSum = 0;
  for (var index = 0; index < strumberray.length; index += 1) {
    uberHyperCubeSum += Math.pow(parseInt(strumberray[index], 10), 5);
  }
  if (uberHyperCubeSum === i) {
    total += i;
  }
}

console.log(total);
