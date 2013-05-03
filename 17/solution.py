number_names = {
	0: {
		0: '',
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine'
	},
	1: {
		0: '',
		1: {
			0: 'ten',
			1: 'eleven',
			2: 'twelve',
			3: 'thirteen',
			4: 'fourteen',
			5: 'fifteen',
			6: 'sixteen',
			7: 'seventeen',
			8: 'eighteen',
			9: 'nineteen'
		},
		2: 'twenty',
		3: 'thirty',
		4: 'fourty',
		5: 'fifty',
		6: 'sixty',
		7: 'seventy',
		8: 'eighty',
		9: 'ninety'
	}
}

def getNumberOfLetters(number):
	total = 0
	limber = [int(number) for number in list(str(number))]
	limber.reverse()
	if len(limber) == 1:
		total += len(number_names[0][limber[0]])
	elif len(limber) == 2:
		if limber[1] == 1:
			total += len(number_names[1][1][limber[0]])
		else:
			total += len(number_names[1][limber[1]])
			total += len(number_names[0][limber[0]])
	elif len(limber) == 3:
		total += getNumberOfLetters(limber[2])
		total += len('hundred')
		if limber[1] != 0 and limber[0] != 0:
			total += len('and')
			total += getNumberOfLetters(int(limber[1] + limber[0]))
	elif len(limber) == 4:
		total += len('one' + 'thousand')
	return total

total = 0
for i in range(1, 1001):
	total += getNumberOfLetters(i)

print total