strumbers = %w(1 2 3 4 5 6 7 8 9)
solutions = []

(1..4).each do |multiplicand_digits|
  max_multiplier_digits =  5 - multiplicand_digits
  strumbers.permutation(multiplicand_digits).each do |multiplicand_strumberray|
    multiplicand = multiplicand_strumberray.reduce(:+).to_i
    (1..max_multiplier_digits).each do |multiplier_digits|
      strumbers.permutation(multiplier_digits).each do |multiplier_strumberray|
        multiplier = multiplier_strumberray.reduce(:+).to_i
        product = multiplicand * multiplier
        product_strumberray = product.to_s.split("")
        strumberray = product_strumberray + multiplicand_strumberray + multiplier_strumberray
        next unless strumberray.length == 9
        result = strumberray.join("")
        strumbers.each { |strumber| result.sub!(strumber, "") }
        solutions << product if result.empty?
      end
    end
  end
end

puts solutions.uniq.reduce :+
