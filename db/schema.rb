# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_05_04_182713) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "moves", force: :cascade do |t|
    t.string "name"
    t.string "damage_class"
    t.string "move_type"
    t.integer "accuracy"
    t.integer "power"
    t.integer "pp"
    t.integer "priority"
    t.integer "effect_chance"
    t.integer "stat_change"
    t.string "stat_name"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "pokemon_moves", force: :cascade do |t|
    t.bigint "pokemon_id", null: false
    t.bigint "move_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["move_id"], name: "index_pokemon_moves_on_move_id"
    t.index ["pokemon_id"], name: "index_pokemon_moves_on_pokemon_id"
  end

  create_table "pokemons", force: :cascade do |t|
    t.string "name"
    t.integer "number"
    t.string "type_1"
    t.string "type_2"
    t.string "sprite_back"
    t.string "sprite_front"
    t.string "image"
    t.integer "spd"
    t.integer "sp_def"
    t.integer "sp_atk"
    t.integer "def"
    t.integer "atk"
    t.integer "hp"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "pokemon_moves", "moves"
  add_foreign_key "pokemon_moves", "pokemons"
end
