class RenameSubmit < ActiveRecord::Migration[5.0]
  def change
    rename_column :proposals, :submit, :is_submit
  end
end
