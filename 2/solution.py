fib = [1, 1]

def populateFib():
	next_term = fib[-1] + fib[-2]
	if next_term > 4000000:
		return
	else:
		fib.append(next_term)
		populateFib()

populateFib()

total = 0
for i in fib:
	if i % 2 == 0:
		total += i

print total