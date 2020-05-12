class PokemonsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:show]

  def show
    @pokemon = Pokemon.find(params[:id])
    @moves = PokemonMove.where(pokemon_id: params[:id])
  end
end
