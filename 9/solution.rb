def getPythagoreanTripleProduct sum
	(1..sum).each do |a|
		(1..sum).each do |b|
			c = sum - a - b
			if (a ** 2) + (b ** 2) == c ** 2
				return a * b * c
			end
		end
	end
end

puts getPythagoreanTripleProduct 1000