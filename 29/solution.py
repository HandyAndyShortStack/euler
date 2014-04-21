def distinctPowers(number):
  results = {}
  for base in range(2, number + 1):
    for exponent in range(2, number + 1):
      results[base ** exponent] = True
  return len(results.keys())

print distinctPowers(100)
