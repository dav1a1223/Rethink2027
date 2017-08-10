ActiveAdmin.register News do
  menu priority: 3
  permit_params :title, :content

  index do
    selectable_column
    id_column
    column :title
    column :content
    column :created_at
    actions
  end
end
