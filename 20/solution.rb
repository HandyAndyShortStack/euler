class Integer
	def factorial
		total = 1
		(1..self).each { |i| total *= i }
		total
	end
end

puts 100.factorial.to_s.split('').map(&:to_i).reduce(:+)