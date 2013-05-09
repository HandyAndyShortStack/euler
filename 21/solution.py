def getFactors(target):
	factors = []
	for i in xrange(1, int(target ** 0.5)):
		if target % i == 0:
			factors.append(i)
			factors.append(target / i)
	if target in factors:
		factors.remove(target)
	return factors

amicable_numbers = []
for i in range(1, 10000):
	if i in amicable_numbers:
		continue
	total = sum(getFactors(i))
	if sum(getFactors(total)) == i and total != i:
		amicable_numbers.append(i)
		amicable_numbers.append(total)

print sum(amicable_numbers)