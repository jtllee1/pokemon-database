class CreateMoves < ActiveRecord::Migration[6.0]
  def change
    create_table :moves do |t|
      t.string :name
      t.string :damage_class
      t.integer :accuracy
      t.integer :power
      t.integer :pp
      t.integer :priority
      t.integer :effect_chance
      t.integer :stat_change
      t.string :stat_name
      t.text :description

      t.timestamps
    end
  end
end
