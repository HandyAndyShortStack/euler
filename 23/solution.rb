class Integer
	def factors
		_factors = [1]
		(2..(self ** 0.5).ceil).each do |i|
			if self % i == 0
				_factors.push i, self / i
			end
		end
		_factors.uniq
	end
end

abundant_numbers = []
(12..28132).each do |i|
	if i.factors.reduce(:+) > i 
		abundant_numbers.push i
	end
end

field = {}
(1..28132).each do |i|
	field[i] = true
end

abundant_numbers.each do |abundant_number1|
	abundant_numbers.each do |abundant_number2|
		field[abundant_number1 + abundant_number2] = false
	end
end

total = 0
(1..28132).each do |i|
	if field[i]
		total += i
	end
end

puts total