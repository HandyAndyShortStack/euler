def getPythagoreanTripleProduct(sum_of_triple):
	product = 0
	for a in range(1, sum_of_triple):
		for b in range(1, sum_of_triple):
			c = sum_of_triple - a - b
			if (a ** 2) + (b ** 2) == c ** 2:
				return a * b * c

print getPythagoreanTripleProduct(1000)