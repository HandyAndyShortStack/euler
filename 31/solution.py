combinations = 0

for pennies in range(0, 201, 1):
  for twoPence in range(0, 201 - pennies, 2):
    for fivePence in range(0, 201 - pennies - twoPence, 5):
      for tenPence in range(0, 201 - pennies - twoPence - fivePence, 10):
        for twentyPence in range(0, 201 - pennies - twoPence - fivePence - tenPence, 20):
          for fiftyPence in range(0, 201 - pennies - twoPence - fivePence - tenPence - twentyPence, 50):
            for pounds in range(0, 201 - pennies - twoPence - fivePence - tenPence - twentyPence - fiftyPence, 100):
              for twoPounds in range(0, 201 - pennies - twoPence - fivePence - tenPence - twentyPence - fiftyPence - pounds, 200):
                total = pennies + twoPence + fivePence + tenPence + twentyPence + fiftyPence + pounds + twoPounds
                if total == 200:
                  combinations += 1

print combinations

