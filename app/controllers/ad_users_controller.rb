class AdUsersController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    
  end

  def sid_api
    ad_users = AdUser.new
    sids = ad_users.list_sids(params[:data].split(","))
    render :json => {sids: sids}
  end

end
