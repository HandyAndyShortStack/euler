target = 600851475143
i = 1

def findLargestPrimeFactor(target):
	i = 1
	while i < target:
		i += 1
		if target % i == 0 and i < target:
			return findLargestPrimeFactor(target / i)
	return target

print findLargestPrimeFactor(target)