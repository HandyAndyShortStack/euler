import math

def isPrime(number):
  if number < 2:
    return False
  for i in range(2, int(math.ceil(math.sqrt(number)))):
    if number % i == 0:
      return False
  return True

def result(a, b, n):
  return (n ** 2) + (a * n) + b
  
def findNumberOfPrimes(a, b):
  i = 0
  while isPrime(result(a, b, i)):
    i += 1
  return i

mostPrimes = 0
product = 0
for a in range(-999, 1000):
  for b in range(-999, 1000):
    numberOfPrimes = findNumberOfPrimes(a, b)
    if numberOfPrimes > mostPrimes:
      mostPrimes = numberOfPrimes
      product = a * b

print product
