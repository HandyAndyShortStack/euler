require 'date'

total = 0
(1901..2000).each do |year|
	(1..12).each do |month|
		total += 1 if Date.new(year, month, 1).sunday?
	end
end

puts total