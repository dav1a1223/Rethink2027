class AddUserIdToProposal < ActiveRecord::Migration[5.0]
  def change
    add_reference :proposals, :user, index: true
    add_reference :comments, :proposal, index: true
    add_reference :members, :proposal, index: true
  end
end
