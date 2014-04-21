def distinct_powers number
  results = {}
  (2..number).each do |base|
    (2..number).each do |exponent|
      results[base ** exponent] = true
    end
  end
  results.keys.length
end

puts distinct_powers 100
