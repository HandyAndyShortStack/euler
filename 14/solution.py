def collatzSequenceLength(target, length=0):
	length += 1
	if target == 1:
		return length
	elif target % 2 == 0:
		return collatzSequenceLength(target / 2, length)
	else:
		return collatzSequenceLength(target * 3 + 1, length)

longest_sequence = 0
solution = 0
for i in xrange(1, 1000000):
	length = collatzSequenceLength(i)
	if length > longest_sequence:
		longest_sequence = length
		solution = i

print solution