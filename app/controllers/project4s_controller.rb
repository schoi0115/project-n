class Project4sController < ApplicationController
    def index
        project4s = Project4.all
        render json: project4s
    end

    def create
        
        project4 = @current_user.project4s.create!(project4_params)
        render json: project4, status: :created
    end
    
    
      private
    
      def project4_params
        params.permit(:title, :year, :feeling)
      end
end
