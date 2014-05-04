combinations = 0

(0..200).step(1) do |pennies|
  (0..200 - pennies).step(2) do |twoPence|
    (0..200 - pennies - twoPence).step(5) do |fivePence|
      (0..200 - pennies - twoPence - fivePence).step(10) do |tenPence|
        (0..200 - pennies - twoPence - fivePence - tenPence).step(20) do |twentyPence|
          (0..200 - pennies - twoPence - fivePence - tenPence - twentyPence).step(50) do |fiftyPence|
            (0..200 - pennies - twoPence - fivePence - tenPence - twentyPence - fiftyPence).step(100) do |pounds|
              (0..200 - pennies - twoPence - fivePence - tenPence - twentyPence - fiftyPence - pounds).step(200) do |twoPounds|
                total = pennies + twoPence + fivePence + tenPence + twentyPence + fiftyPence + pounds + twoPounds
                if total == 200
                  combinations += 1
                end
              end
            end
          end
        end
      end
    end
  end
end

puts combinations

