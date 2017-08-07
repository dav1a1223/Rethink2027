class Member < ApplicationRecord
  belongs_to :proposal, required: false
end
