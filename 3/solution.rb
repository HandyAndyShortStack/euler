target = 600851475143

def find_largest_prime_factor target
	i = 1
	while i < target
		i += 1
		if target % i == 0 and i < target
			return find_largest_prime_factor target / i
		end
	end
	target
end

puts find_largest_prime_factor(target)