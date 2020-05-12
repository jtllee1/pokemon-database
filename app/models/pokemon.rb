class Pokemon < ApplicationRecord
  has_many :pokemon_moves
  has_many :moves, through: :pokemon_moves
end
