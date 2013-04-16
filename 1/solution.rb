total = 0
(1...1000).each do |i|
	if i % 3 == 0 or i % 5 == 0
		total += i
	end
end

puts total