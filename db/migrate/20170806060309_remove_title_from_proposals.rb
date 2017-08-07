class RemoveTitleFromProposals < ActiveRecord::Migration[5.0]
  def change
    remove_column :proposals, :title
    add_column :proposals, :action_name, :string
  end
end
