def find_length_of_repeating_segment_of_unit_fraction(number):
  remainders = {}
  index = 0
  remainder = 0.1
  while remainder not in remainders:
    tup = divmod(remainder * 10, number)
    remainder = tup[1]
    remainders[remainder] = index
    index += 1
    print remainder, index
  return index - remainders[remainder]

