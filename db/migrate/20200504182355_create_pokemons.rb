class CreatePokemons < ActiveRecord::Migration[6.0]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.integer :number
      t.string :type_1
      t.string :type_2
      t.string :sprite_back
      t.string :sprite_front
      t.string :image
      t.integer :spd
      t.integer :sp_def
      t.integer :sp_atk
      t.integer :def
      t.integer :atk
      t.integer :hp

      t.timestamps
    end
  end
end
