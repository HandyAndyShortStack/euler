def find_length_of_repeating_segment_of_unit_fraction number
  remainders = {}
  index = 0
  remainder = 0.1
  while true
    remainder = ((remainder * 10).to_i % number)
    if remainders.keys.include? remainder
      return index - remainders[remainder]
    end
    remainders[remainder] = index
    index += 1
  end
end

greatest_repeating_segment_length = 0
result = 0
(1...1000).each do |i|
  segment_length = find_length_of_repeating_segment_of_unit_fraction(i)
  if segment_length > greatest_repeating_segment_length
    greatest_repeating_segment_length = segment_length
    result = i
  end
end

puts result
