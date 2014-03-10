def find_length_of_repeating_segment_of_unit_fraction(number):
  remainders = {}
  index = 0
  remainder = 0.1
  while True:
    remainder = (int(remainder * 10) % number)
    if remainder in remainders:
      return index - remainders[remainder]
    remainders[remainder] = index
    index += 1

greatest_repeating_segment_length = 0
for i in range(1, 1000):
  segment_length = find_length_of_repeating_segment_of_unit_fraction(i)
  if segment_length > greatest_repeating_segment_length:
    greatest_repeating_segment_length = segment_length

print greatest_repeating_segment_length
