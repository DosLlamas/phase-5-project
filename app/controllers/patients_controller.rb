class PatientsController < ApplicationController

    skip_before_action :authorized_user, only: [:create, :index]

    def index
        render json: Patient.all
    end

    def show
        render json: current_user
    end

    def create
        render json: Patient.create!(user_params), status: :created
    end

    def update
        current_user.update(user_params)
        render json: current_user, status: :accepted
    end

    def destroy
        current_user.destroy
        head :no_content
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :password, :d_o_b, :email)
    end
end
