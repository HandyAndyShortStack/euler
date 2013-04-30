def getFactors target
	factors = []
	(1..(target ** 0.5).ceil).each do |i|
		if target % i == 0
			factors.push i
			factors.push target / i
		end
	end
	factors
end

done = false
term = 0
triangle_number = 0
while not done
	term += 1
	triangle_number += term
	if getFactors(triangle_number).length > 500
		done = true
	end
end

puts triangle_number