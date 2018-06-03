class CreateMutants < ActiveRecord::Migration[5.2]
  def change
    create_table :mutants do |t|
      t.string :name
      t.string :power

      t.timestamps
    end
  end
end
