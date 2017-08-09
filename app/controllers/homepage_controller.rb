class HomepageController < ApplicationController
  def index

  end

  def about
    render template: "homepage/about"
  end

  def about_depath
    render template: "homepage/#{request.path}"
  end
end
