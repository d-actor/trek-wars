# star wars locations
50.times do
  Location.create(nerd_type: 'starwars', name: Faker::StarWars.planet)
end

# star wars characters
50.times do
  Character.create(nerd_type: 'starwars', name: Faker::StarWars.character)
end

# star trek locations
50.times do
  Location.create(nerd_type: 'startrek', name: Faker::StarTrek.location)
end

# star trek characters
50.times do
  Character.create(nerd_type: 'startrek', name: Faker::StarTrek.character)
end

puts 'Seeded'
