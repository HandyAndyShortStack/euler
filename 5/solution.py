import math

def isPrime(number):
	for i in range(2, number):
		if number % i == 0:
			return False
	return True

primes = [ i for i in range(2, 21) if isPrime(i) ]
lowest_common_multiple = 1

for prime in primes:
	occurrences = int(math.floor(math.log(20, prime)))
	lowest_common_multiple = lowest_common_multiple * (prime ** occurrences)

print lowest_common_multiple