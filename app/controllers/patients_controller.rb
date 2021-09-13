class PatientsController < ApplicationController
    skip_before_action :authorize, only: [:create]
    def index
        patients = Patient.all
        render json: patients
    end

    def show
        patient = Paitent.find(params[:id])
        render json: patient
    end

    def create
        patient = Patient.create(patient_params)
        if patient
          render json: user, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def patient_params
        params.permit(:name, :age, :weight, :address)
    end
end
