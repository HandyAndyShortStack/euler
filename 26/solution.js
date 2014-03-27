function findLengthOfRepeatingSegmentOfUnitFraction(number) {
  var remainders = {};
  var index = 0
  var remainder = 0.1
  while (true) {
    remainder = (remainder * 10) % number;
    if (remainders[remainder]) {
      return index - remainders[remainder];
    }
    remainders[remainder] = index;
    index += 1; 
  }
}

var greatestRepeatingSegmentLength = 0;
var result = 0;
for (var i = 1; i < 1000; i += 1) {
  var segmentLength = findLengthOfRepeatingSegmentOfUnitFraction(i);
  if (segmentLength > greatestRepeatingSegmentLength) {
    greatestRepeatingSegmentLength = segmentLength;
    result = i;
  }
}

console.log(result);
