def getFactors(target):
	factors = []
	for i in xrange(1, int(target ** 0.5) + 1):
		if target % i == 0:
			factors.append(i)
			other_factor = target / i
			if other_factor != i:
				factors.append(other_factor)
	if target in factors:
		factors.remove(target)
	return factors

abundant_numbers = []
for i in xrange(28132):
	if sum(getFactors(i)) > i:
		abundant_numbers.append(i)

field = {}
for i in xrange(28132):
	field[i] = True
for abundant_number1 in abundant_numbers:
	for abundant_number2 in abundant_numbers:
		abundant_sum = abundant_number1 + abundant_number2
		field[abundant_sum] = False

non_abundant_total = 0
for i in xrange(28132):
	if field[i]:
		non_abundant_total += i

print non_abundant_total