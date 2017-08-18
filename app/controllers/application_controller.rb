class ApplicationController < ActionController::Base
  protect_from_forgery prepend: true

  def after_sign_in_path_for(resource)
    if request.env['omniauth.origin']
      if request.env['omniauth.origin'].to_s.split('?').last == "proposal=go"
        proposal_redirect_path
      else
        super
      end
    else
      super
    end
  end
end
