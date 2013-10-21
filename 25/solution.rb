term = 2
prev_value = 1
current_value = 1
while current_value.to_s.length < 1000
  term += 1
  next_value = prev_value + current_value
  prev_value = current_value
  current_value = next_value
end

puts term
