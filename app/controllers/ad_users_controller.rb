class AdUsersController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    
  end

  def sid_api
    ad_users = AdUser.new
    sids = ad_users.list_sids(params[:data].split(","))
    p sids
    render :json => {sids: sids}
  end

  def user_api
    ad_users = AdUser.new
    users = ad_users.list_users(params[:data].split(","))
    p users
    render :json => {users: users}
  end

end
