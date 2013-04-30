def collatzSequenceLength target, length=0
	length += 1
	if target == 1
		length
	elsif target % 2 == 0
		collatzSequenceLength target / 2, length
	else
		collatzSequenceLength target * 3 + 1, length
	end
end

longest_sequence = 0
solution = 0
(1...1000000).each do |i|
	length = collatzSequenceLength i
	if length > longest_sequence
		longest_sequence = length
		solution = i
	end
end

puts solution