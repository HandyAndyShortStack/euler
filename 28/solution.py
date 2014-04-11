total = 1
count = 1

for sideLength in range(1, 1001, 2):
  for cornerNumber in range(1, 5):
    count += sideLength + 1
    total += count

print total
