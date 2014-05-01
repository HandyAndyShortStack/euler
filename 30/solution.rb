total = 0

(2..999999).each do |i|
  uberHyperCubeSum = i.to_s.split("").map { |char| char.to_i ** 5 }.reduce &:+
  total += i if i == uberHyperCubeSum
end

puts total
