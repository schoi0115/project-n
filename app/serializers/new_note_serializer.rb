class NewNoteSerializer < ActiveModel::Serializer
  attributes :id, :note, :user_id, :patient_id
end
