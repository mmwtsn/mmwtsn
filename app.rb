# Load Rubygems
require 'bundler'
Bundler.require

# Load helper files
require './httpauth'
require './helpers'

# Use default ERB layout wrapper for all markdown files
set :markdown, :layout_engine => :erb, :layout => :layout

# Index
get '/?' do
  @class = 'home'
  redirect '/musings/first'
end

# Words (blog), Work (portfolio) and About (personal infomration)
get '/words/?' do
  @class = 'words'
  erb :words
end

get '/work/?' do
  @class = 'work'
  erb :work
end

get '/about/?' do
  @class = 'about'
  erb :about
end

# Markdown routes
get '/*/?' do
  @class = 'article'
  @element = 'article'
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

