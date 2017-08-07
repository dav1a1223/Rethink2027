class AddSubmitToProposals < ActiveRecord::Migration[5.0]
  def change
    add_column :proposals, :submit, :boolean
    add_column :proposals, :publish, :boolean
  end
end
