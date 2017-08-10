ActiveAdmin.register User do
  menu priority: 2

  index do
    selectable_column
    id_column
    column :email
    column :name
    column :provider
    column :created_at
    actions
  end
end
