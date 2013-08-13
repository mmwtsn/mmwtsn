require 'rack/test'
require_relative '../app'

set :environment, :test

def app
	Sinatra::Application
end

RSpec.configure do |conf|
  conf.include Rack::Test::Methods
end

