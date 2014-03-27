require "prime"

def result a, b, n
  (n ** 2) + (a * n) + b
end

def find_number_of_primes a, b
  i = 0
  while result(a, b, i).prime?
    i += 1
  end
  i
end

most_primes = 0
product = 0
(-999...1000).each do |a|
  (-999...1000).each do |b|
    number_of_primes = find_number_of_primes a, b
    if number_of_primes > most_primes
      most_primes = number_of_primes
      product = a * b
    end
  end
end

puts product
