require 'prime'
primes = Prime.take_while { |i| i < 2_000_000 }
puts primes.inject(:+)