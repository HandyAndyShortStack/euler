def getFactors target
	factors = []
	(1..(target ** 0.5).ceil).each do |i|
		if target % i == 0
			factors.push i
			factors.push target / i
		end
	end
	factors.delete target if factors.member? target
	factors
end

amicable_numbers = []
(2...10000).each do |i|
	next if amicable_numbers.member? i
	total = getFactors(i).reduce :+
	if getFactors(total).reduce(:+) == i and total != i
		amicable_numbers += [i, total]
	end
end

puts amicable_numbers.reduce :+