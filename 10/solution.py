def getPrimes(field_size):
	
	primes = []
	field = {}
	for i in range(field_size):
		field[i] = True

	for i in range(2, field_size):

		if field[i]:
			primes.append(i)
			for multiple in range(i, field_size, i):
				field[multiple] = False

	return primes

print sum(getPrimes(2000000))