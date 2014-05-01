total = 0

for i in range(2, 999999):
  uberHyperCubeSum = sum([(int(char) ** 5) for char in str(i)])
  if i == uberHyperCubeSum:
    total += i

print total
