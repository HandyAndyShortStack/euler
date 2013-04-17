class Fixnum
	def is_prime?
		(2...self).each do |i|
			if self % i == 0
				return false
			end
		end
		true
	end
end

primes = []
(2..20).each do |i|
	primes.push i if i.is_prime?
end

lowest_common_multiple = 1

primes.each do |prime|
	occurrences = Math.log(20, prime).floor
	lowest_common_multiple = lowest_common_multiple * (prime ** occurrences)
end

puts lowest_common_multiple