class AdUser < ApplicationRecord

  def initialize(e)
    super(e)
    @settings = {
      :host => 'ataladc1.atal.local',
      :base => 'dc=atal,dc=local',
      :port => 389,
      :auth => {
        :method => :simple,
        :username => "",
        :password => ""
      }
    } 
    authorize
  end
    
  public
  def list_users(sids)
    results = Hash.new
    sids.each do |sid|
      results[sid]=find_user(sid)
    end
    results
  end

  def list_sids(keys)
    results = []
    keys.each do |key|
      results << find_sid(key)
    end
    results.join(",")
  end
  
  private 
  
  def find_sid(key)
    if key.include?('@')
      user = ActiveDirectory::User.find(:first, :mail => key) 
    elsif key.include?(' ')
      user = ActiveDirectory::User.find(:first, :displayname => key) 
    else
      user = ActiveDirectory::User.find(:first, :samaccountname => key)
    end
    return user.sid if not user.nil? 
    return "Not Found"
  end
  
  def find_user(sid)

  end

  def sid?(key)

  end

  def authorize
    ActiveDirectory::Base.setup(@settings)
  end

  def allUsers

  end
  

end
