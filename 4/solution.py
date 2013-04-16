def isPalindrome(candidate):
	candidate = str(candidate)
	if candidate == '':
		return True
	elif candidate[0] != candidate[-1]:
		return False
	else:
		return isPalindrome(candidate[1:-1])

highest_palindromic_multiple = 0

for i1 in range(100, 1000):
	for i2 in range(i1, 1000):
		candidate = i1 * i2
		if isPalindrome(candidate) and candidate > highest_palindromic_multiple:
			highest_palindromic_multiple = candidate

print highest_palindromic_multiple

