ActiveAdmin.register Proposal do

permit_params :description, :user_id, :action_name, :action_intro, :action_location,
              :how_can_we, :excitement, :image, :publish, :is_submit,
              :members_attributes => [:id, :name, :birthday, :phone, :email]

scope :submitted
scope :published
end
