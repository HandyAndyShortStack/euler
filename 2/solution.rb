fib = [1, 1]

def populateFib fib
	next_term = fib[-1] + fib[-2]
	unless next_term > 4_000_000
		fib.push next_term
		populateFib fib
	end
end

populateFib fib

total = 0
fib.each do |i|
	if i % 2 == 0
		total += i
	end
end

puts total