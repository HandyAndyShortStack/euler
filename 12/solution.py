def getFactors(target):
	factors = []
	for i in xrange(1, int(target ** 0.5)):
		if target % i == 0:
			factors.append(i)
			factors.append(target / i)
	return factors

done = False
term = 0
triangle_number = 0
while not done:
	term += 1
	triangle_number += term
 	if len(getFactors(triangle_number)) > 500:
 		done = True

print triangle_number