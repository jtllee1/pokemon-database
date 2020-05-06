class PokemonsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :show]

  def index
    @pokemons = Pokemon.all
  end

  def show
    @pokemon = Pokemon.find(params[:id])
  end
end
