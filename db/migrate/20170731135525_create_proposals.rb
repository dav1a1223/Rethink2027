class CreateProposals < ActiveRecord::Migration[5.0]
  def change
    create_table :proposals do |t|
      t.string :title
      t.text :description
      t.text :action_intro
      t.text :action_target
      t.text :action_procedure
      t.string :action_location
      t.text :motivation
      
      t.timestamps
    end
  end
end
