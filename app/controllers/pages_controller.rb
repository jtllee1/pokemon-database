class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :battle]

  def home
    find_pokemons
  end

  def battle
    find_pokemons
    find_moves
    pokemon_one
    pokemon_two
  end

  private

  def find_pokemons
    @pokemons = Pokemon.all
  end

  def find_moves
    @moves = Move.all
  end

  def pokemon_one
    @pokemon_1 = Pokemon.find_by(name: "Dragonite")
    @move_1 = Move.find_by(name: "Hyper-beam")
    @move_2 = Move.find_by(name: "Flamethrower")
    @move_3 = Move.find_by(name: "Ice-beam")
    @move_4 = Move.find_by(name: "Thunderbolt")
    @hp = (@pokemon_1.hp * 2 + 204).to_i
    @atk = (@pokemon_1.atk * 2 + 99).to_i
    @def = (@pokemon_1.def * 2 + 99).to_i
    @sp_atk = (@pokemon_1.sp_atk * 2 + 99).to_i
    @sp_def = (@pokemon_1.sp_def * 2 + 99).to_i
    @spd = (@pokemon_1.spd * 2 + 99).to_i
  end

  def pokemon_two
    @pokemon_2 = Pokemon.find_by(name: "Mewtwo")
    @move_1_2 = Move.find_by(name: "Psychic")
    @move_2_2 = Move.find_by(name: "Hyper-beam")
    @move_3_2 = Move.find_by(name: "Swift")
    @move_4_2 = Move.find_by(name: "Recover")
    @hp_2 = (@pokemon_2.hp * 2 + 204).to_i
    @atk_2 = (@pokemon_2.atk * 2 + 99).to_i
    @def_2 = (@pokemon_2.def * 2 + 99).to_i
    @sp_atk_2 = (@pokemon_2.sp_atk * 2 + 99).to_i
    @sp_def_2 = (@pokemon_2.sp_def * 2 + 99).to_i
    @spd_2 = (@pokemon_2.spd * 2 + 99).to_i
  end
end
