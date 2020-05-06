class MovesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index]

  def index
    @moves = Move.all
  end
end
