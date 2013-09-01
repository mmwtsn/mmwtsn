# Load Rubygems
require 'bundler'
Bundler.require

# Load helper files
require './httpauth'
require './helpers'

# Use default ERB layout wrapper for all markdown files
set :markdown, :layout_engine => :erb, :layout => :layout

# Static Routes
get "/?" do
  @class = 'home'
  redirect '/musings'
end

get "/musings/?" do
  @class = 'musings'
  erb :musings
end

get "/about/?" do
  @class = 'about'
  erb :about
end

get "/work/?" do
  @class = 'work'
  erb :work
end

# Markdown routes
get "/*/?" do
  @class = "article"
  render_markdown
end

# 404
not_found do
  not_found
end

# 500
error do
  error
end

