# Load Rubygems
require 'bundler'
Bundler.require

# Load helper files
require './httpauth'
require './helpers'

# Use default ERB layout wrapper for all markdown files
set :markdown, :layout_engine => :erb, :layout => :layout

# Index
get "/" do
  "Morning."
end

# Markdown routes
get "/*/?" do
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

