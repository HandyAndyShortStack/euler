def getFactors(target):
	factors = []
	for i in xrange(1, int(target ** 0.5)):
		if target % i == 0:
			factors.append(i)
			factors.append(target / i)
	return factors

factors = getFactors(28)
factors.sort()
print factors