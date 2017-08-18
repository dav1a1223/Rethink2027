class HomepageController < ApplicationController
  def index
  end

  def about
    render template: "homepage/about"
  end

  def activities
    render templete: "homepage/activities"
  end

  def partner
    render template: "homepage/partner"
  end

  def about_depath
    render template: "homepage/#{request.path}"
  end

  def partner_depath
    render template: "homepage/#{request.path}"
  end
end
