class Api::LocationsController < ApplicationController
  before_action :set_location, except: [:index, :create]

  def index
    if nerd_type = params[:nerd_type]
      render json: Location.all.where(nerd_type: nerd_type)
    else
      render json: Location.all
    end
  end

  def show
  end

  def create
  end

  def update
    if @location.update(location_params)
      render json: @location
    else
      render json: { errors: @location.errors.full_messages.join(',') }, status: :bad_request
    end
  end

  def destroy
    @location.destroy
  end

  private

  def set_location
    @location = Location.find(params[:id])
  end

  def location_params
    params.require(:location).permit(:name, :active)
  end
end
