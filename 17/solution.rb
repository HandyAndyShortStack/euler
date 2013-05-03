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

total += one_through_nine.length * 90
total += ten_through_nineteen.length * 10
total += twenty_through_ninety.length * 100
total += 'and'.length * 99 * 9
total += 'hundred'.length * 900
total += one_through_nine.length * 100
total += ('one' + 'thousand').length

puts total