def is_palindrome candidate
	candidate = candidate.to_s
	if candidate == ''
		true
	elsif candidate[0] != candidate[-1]
		false
	else
		is_palindrome candidate[1...candidate.length - 1]
	end
end

highest_palindromic_multiple = 0

(100..999).each do |i1|
	(i1..999).each do |i2|
		candidate = i1 * i2
		if is_palindrome candidate and candidate > highest_palindromic_multiple
			highest_palindromic_multiple = candidate
		end
	end
end

puts highest_palindromic_multiple