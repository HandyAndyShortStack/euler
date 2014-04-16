total = 1
count = 1

(1...1001).step(2).each do |side_length|
  (1..4).each do |corner_number|
    count += side_length + 1
    total += count
  end
end

puts total
