class PatientsController < ApplicationController
    wrap_parameters format: []
    skip_before_action :authorize, only: [:create]
    
    def index
        patients = Patient.where(user_id: session[:user_id], admitted: true)
        render json: patients
    end

    def show
        patient = Patient.find(params[:id])
        render json: patient
    end

    def create
        patient = Patient.create(patient_params)
        if patient.valid?
          render json: patient, status: :created
        else
          render json: { errors: patient.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        patient = Patient.find_by(id: params[:id])
        patient.update(patient_params)

        render json: patient, status: :accepted
    end

    private

    def patient_params
        params.permit(:id, :name, :age, :weight, :address, :difficulty, :injury, :mechanism_of_injury, :admitted, :user_id)
    end
end
