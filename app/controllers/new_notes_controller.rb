class NewNotesController < ApplicationController

    def create
        new_note = NewNotes.create(params.permit[:notes, :patient_id, :user_id])
        if new_note.valid?
          render json: new_note, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end
end
