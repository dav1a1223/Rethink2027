class ReviseProposalAttr < ActiveRecord::Migration[5.0]
  def change
    remove_column :proposals, :action_target
    remove_column :proposals, :action_procedure
    remove_column :proposals, :motivation
    add_column :proposals, :how_can_we, :text
    add_column :proposals, :excitement, :text
  end
end
