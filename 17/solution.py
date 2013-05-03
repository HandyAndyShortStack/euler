one_through_nine = (
	'one' + 'two' + 'three' +
	'four' + 'five' + 'six' +
	'seven' + 'eight' + 'nine'
)

ten_through_nineteen = (
	'ten' + 'eleven' + 'twelve' + 'thirteen' + 'fourteen' +
	'fifteen' + 'sixteen' + 'seventeen' + 'eighteen' + 'nineteen'
)

twenty_through_ninety = (
	'twenty' + 'thirty' + 'forty' + 'fifty' +
	'sixty' + 'seventy' + 'eighty' + 'ninety'
)

total = 0

total += len(one_through_nine) * 90
total += len(ten_through_nineteen) * 10
total += len(twenty_through_ninety) * 100
total += len('and') * 99 * 9
total += len('hundred') * 900
total += len(one_through_nine) * 100
total += len('one' + 'thousand')

print total