ActiveAdmin.register Proposal do
  menu priority: 1

  permit_params :description, :user_id, :action_name, :action_intro, :action_location,
                :how_can_we, :excitement, :image, :publish, :is_submit,
                :members_attributes => [:id, :name, :birthday, :phone, :email, :_destroy],
                :hashtags_attributes => [:id, :text, :_destroy]

  scope :submitted
  scope :published

  index do
    selectable_column
    id_column
    column :action_name
    column :user
    column :action_intro
    column :action_location
    column :members_count do |proposal|
      proposal.members.count
    end
    column :hashtags_count do |proposal|
      proposal.hashtags.count
    end
    column :is_submit
    column :publish
    actions
  end

  show do |proposal|
    attributes_table do
      rows :description, :user_id, :action_name, :action_intro, :action_location,
           :how_can_we, :excitement, :image, :publish, :is_submit
    end

    panel "成員" do
      table_for proposal.members do
        column :name
        column :email
        column :birthday
        column :phone
      end
    end

    panel "Hashtag" do
      table_for proposal.hashtags do
        column :text
      end
    end
  end

  form do |f|
    f.semantic_errors *f.object.errors.keys
    f.inputs do
      f.input :user
      f.input :description
      f.input :action_name
      f.input :action_intro
      f.input :action_location
      f.input :how_can_we
      f.input :excitement
      f.input :image
      f.input :publish
      f.input :is_submit
    end

    f.inputs do
      f.has_many :members, allow_destroy: true do |mf|
        mf.input :name
        mf.input :email
        mf.input :birthday, as: :datepicker
        mf.input :phone
      end
    end

    f.inputs do
      f.has_many :hashtags, allow_destroy: true do |mf|
        mf.input :text
      end
    end


    f.actions
  end

  csv do
    column :id
    column :action_name
    column :description
    column :user
    column :action_intro
    column :action_location
    column :how_can_we
    column :excitement
    column :publish
    column :members1_name do |proposal|
      proposal.members.first&.name || "無"
    end
    column :members1_phone do |proposal|
      proposal.members.first&.phone || "無"
    end
    column :members1_email do |proposal|
      proposal.members.first&.email || "無"
    end
    column :members2_name do |proposal|
      proposal.members.second&.name || "無"
    end
    column :members2_phone do |proposal|
      proposal.members.second&.phone || "無"
    end
    column :members2_email do |proposal|
      proposal.members.second&.email || "無"
    end
    column :members3_name do |proposal|
      proposal.members.third&.name || "無"
    end
    column :members3_phone do |proposal|
      proposal.members.third&.phone || "無"
    end
    column :members3_email do |proposal|
      proposal.members.third&.email || "無"
    end

  end
end
