var total = 1;
var count = 1;

for (var sideLength = 1; sideLength < 1001; sideLength += 2) {
  for (var cornerNumber = 1; cornerNumber <= 4; cornerNumber += 1) {
    count += sideLength + 1;
    total += count;
  }
}

console.log(total);
