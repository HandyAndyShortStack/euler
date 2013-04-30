class Integer
	def factorial
		total = 1
		(1..self).each { |i| total *= i }
		total
	end
end

puts 40.factorial / (20.factorial ** 2)