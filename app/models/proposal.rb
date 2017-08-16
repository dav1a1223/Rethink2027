class Proposal < ApplicationRecord
  belongs_to :user
  has_many :comments
  has_many :members
  has_many :hashtags
  accepts_nested_attributes_for :members, allow_destroy: true
  accepts_nested_attributes_for :hashtags, allow_destroy: true
  mount_uploader :image, ImageUploader

  scope :published, ->{ where("publish = ?", true) }
  scope :submitted, ->{ where("is_submit = ?", true) }

  def checking?
    !publish && is_submit
  end
end
