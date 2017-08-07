class Proposal < ApplicationRecord
  belongs_to :user
  has_many :comments
  has_many :members
  accepts_nested_attributes_for :members
  mount_uploader :image, ImageUploader

  scope :publish?, ->{ where("publish = ?", true) }
  scope :submit?, ->{ where("is_submit = ?", true) }
end
