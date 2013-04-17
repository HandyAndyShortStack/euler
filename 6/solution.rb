sum_of_squares = 0
(1..100).each do |i|
	sum_of_squares += i ** 2
end

square_of_sum = (1..100).to_a.reduce(:+) ** 2

puts square_of_sum - sum_of_squares