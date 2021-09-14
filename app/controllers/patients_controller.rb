class PatientsController < ApplicationController
    wrap_parameters format: []
    skip_before_action :authorize, only: [:create]
    
    def index
        patients = Patient.where(user_id: session[:user_id])
        render json: patients
    end

    def show
        patient = Patient.find(params[:id])
        render json: patient
    end

    def create
        patient = Patient.create(patient_params)
  
        if patient
          render json: patient, status: :created
        else
          render json: { errors: patient.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def patient_params
        params.permit(:name, :age, :weight, :address, :difficulty, :injury, :mechanism_of_injury, :admitted, :user_id)
    end
end
