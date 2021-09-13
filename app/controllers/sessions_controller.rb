class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create, :patient_create]
    
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

    def patient_create
      patient = Patient.find_by(id: params[:id])
      if patient&.authenticate(params[:name])
        session[:id] = patient.id
        render json: patient, status: :created
      else
        render json: { error: "You cannot add patient" }, status: :unauthorized
  
      end
    end






    
end
