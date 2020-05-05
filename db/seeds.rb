require 'net/http'
require 'json'

PokemonMove.destroy_all
Move.destroy_all
Pokemon.destroy_all

url = 'https://pokeapi.co/api/v2/move?limit=165'
uri = URI(url)

response = Net::HTTP.get(uri)
@moves_hash = JSON.parse(response)['results']

@moves_urls = []

@moves_hash.each do |move|
  @moves_urls << move['url']
end

@moves_urls.each do |url|
  uri = URI(url)
  response = Net::HTTP.get(uri)
  @move = JSON.parse(response)

  puts @name = @move['name'].capitalize
  puts @damage_class = @move['damage_class']['name'].capitalize
  puts @accuracy = @move['accuracy']
  puts @power = @move['power']
  puts @pp = @move['pp']
  puts @priority = @move['priority']
  puts @effect_chance = @move['effect_chance']
  puts @description = @move['effect_entries'][0]['short_effect']

  if @description.include?("$effect_chance")
    puts @description = @description.gsub!('$effect_chance', "#{@effect_chance}")
  end

  @stat_changes = @move['stat_changes']

  if @stat_changes[0]
    puts @stat_change = @move['stat_changes'][0]['change']
    puts @stat = @move['stat_changes'][0]['stat']['name'].capitalize
  end

  @new_move = Move.new(
    name: @name,
    damage_class: @damage_class,
    accuracy: @accuracy,
    power: @power,
    pp: @pp,
    priority: @priority,
    effect_chance: @effect_chance,
    description: @description,
    stat_change: @stat_change,
    stat_name: @stat
    )
  @new_move.save!

  sleep(0.5)
end

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

  @new_pokemon = Pokemon.new(
    name: @name,
    number: @number,
    type_1: @type_1,
    type_2: @type_2,
    sprite_back: @sprite_back,
    sprite_front: @sprite_front,
    image: @image,
    spd: @speed,
    sp_def: @special_defense,
    sp_atk: @special_attack,
    def: @defense,
    atk: @attack,
    hp: @hp
    )
  @new_pokemon.save!

  @pokemon['moves'].each do |move|
    puts @move = move['move']['name'].capitalize
    @move = Move.find_by(name: @move)

    if @move
      @new_pokemon_move = PokemonMove.new(
        pokemon_id: @new_pokemon.id,
        move_id: @move.id
        )
      @new_pokemon_move.save!
    end
  end
  sleep(0.5)
end
