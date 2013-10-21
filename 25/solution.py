term = 2
prev_value = 1
current_value = 1
while len(str(current_value)) < 1000:
  term += 1
  next_value = prev_value + current_value
  prev_value = current_value
  current_value = next_value

print term
