class NewNoteSerializer < ActiveModel::Serializer
  attributes :id, :note, :user_id, :patient_id, :created_at, :author_name

  def author_name 
    self.object.user.first_name
  end


end
