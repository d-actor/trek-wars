class Api::LocationsController < ApplicationController
  # localhost:3001/api/locations?nerd_type=starwars
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
  end

  def destroy
  end
end
