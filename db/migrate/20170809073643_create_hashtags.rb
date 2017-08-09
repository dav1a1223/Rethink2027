class CreateHashtags < ActiveRecord::Migration[5.0]
  def change
    create_table :hashtags do |t|
      t.string :text
      t.belongs_to :proposal
      t.timestamps
    end
  end
end
