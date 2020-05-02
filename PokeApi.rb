require 'net/http'
require 'json'

url = 'https://pokeapi.co/api/v2/pokemon?limit=151'
uri = URI(url)

response = Net::HTTP.get(uri)
@pokemon_hash = JSON.parse(response)['results']

@pokemon_urls = []

@pokemon_hash.each do |pokemon|
  @pokemon_urls << pokemon['url']
end

@pokemon_urls.each do |url|
  uri = URI(url)
  response = Net::HTTP.get(uri)
  @pokemon = JSON.parse(response)

  puts @name = @pokemon['name'].capitalize
  puts @number = @pokemon['id']
  puts @sprite_back = @pokemon['sprites']['back_default']
  puts @sprite_front = @pokemon['sprites']['front_default']
  puts @image = "https://pokeres.bastionbot.org/images/pokemon/#{@number}.png"
  puts @speed = @pokemon['stats'][0]['base_stat']
  puts @special_defense = @pokemon['stats'][1]['base_stat']
  puts @special_attack = @pokemon['stats'][2]['base_stat']
  puts @defense = @pokemon['stats'][3]['base_stat']
  puts @attack = @pokemon['stats'][4]['base_stat']
  puts @hp = @pokemon['stats'][5]['base_stat']

  @types = []
  @pokemon['types'].each do |type|
    @types << type['type']['name'].capitalize
  end

  puts @type_1 = @types[0]
  puts @type_2 = @types[1]
end

# url = 'https://pokeapi.co/api/v2/pokemon/1/'
# uri = URI(url)

# response = Net::HTTP.get(uri)
# @pokemon = JSON.parse(response)
