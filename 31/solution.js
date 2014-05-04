var combinations = 0;

for (var pennies = 0; pennies < 201; pennies += 1) {
  for (var twoPence = 0; twoPence < 201 - pennies; twoPence += 2) {
    for (var fivePence = 0; fivePence < 201 - pennies - twoPence; fivePence += 5) {
      for (var tenPence = 0; tenPence < 201 - pennies - twoPence - fivePence; tenPence += 10) {
        for (var twentyPence = 0; twentyPence < 201 - pennies - twoPence - fivePence - tenPence; twentyPence += 20) {
          for (var fiftyPence = 0; fiftyPence < 201 - pennies - twoPence - fivePence - tenPence - twentyPence; fiftyPence += 50) {
            for (var pounds = 0; pounds < 201 - pennies - twoPence - fivePence - tenPence - twentyPence - fiftyPence; pounds += 100) {
              for (var twoPounds = 0; twoPounds < 201 - pennies - twoPence - fivePence - tenPence - twentyPence - fiftyPence - pounds; twoPounds += 200) {
                var total = pennies + twoPence + fivePence + tenPence + twentyPence + fiftyPence + pounds + twoPounds;
                if (total == 200) {
                  combinations += 1;
                }
              }
            }
          }
        }
      }
    }
  }
}

console.log(combinations);
