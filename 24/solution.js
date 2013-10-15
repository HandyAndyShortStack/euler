function nextPermutation(permutation) {
  var permArray = permutation.split('');
  var tail = [];
  for (var counter = 0; counter < permutation.length; counter += 1) {
    tail.push(permArray.pop());
    tail.sort();
    for (var i = 0; i < tail.length; i += 1) {
      if (tail[i] > permArray[permArray.length - 1]) {
        var replacement = tail[i];
        tail = tail.slice(0, i).concat(tail.slice(i + 1, tail.length));
        tail.push(permArray.pop());
        tail.sort();
        permArray.push(replacement);
        return permArray.concat(tail).join('');
      }
    }
  }
  return false;
}

var permutation = '0123456789';
for (var i = 0; i < 999999; i += 1) {
  permutation = nextPermutation(permutation);
}

console.log(permutation);
