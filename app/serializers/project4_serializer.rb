class Project4Serializer < ActiveModel::Serializer
  attributes :id, :title, :year, :feeling
  has_one :user
end
