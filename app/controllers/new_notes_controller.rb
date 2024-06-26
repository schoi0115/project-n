class NewNotesController < ApplicationController
  wrap_parameters format: []
  skip_before_action :authorize, only: [:create]

    def show
      new_note = NewNote.where(patient_id: params[:id]).order("created_at DESC")
      render json: new_note
    end

    def create
        new_note = NewNote.create(new_note_params)
        if new_note.valid?
          render json: new_note, status: :created
        else
          render json: { errors: new_note.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
      new_note = NewNote.find_by(id: params[:id])
      new_note.destroy
      head :no_content
    end

    private
    def new_note_params
      params.permit(:id, :note, :user_id, :patient_id)
    end
end
