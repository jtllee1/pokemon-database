class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :battle]

  def home
    find_pokemons
  end

  def battle
    find_pokemons
    find_moves
    @pokemon_1 = Pokemon.find_by(name: "Dragonite")
    @pokemon_2 = Pokemon.find_by(name: "Mewtwo")
  end

  private

  def find_pokemons
    @pokemons = Pokemon.all
  end

  def find_moves
    @moves = Move.all
  end
end
