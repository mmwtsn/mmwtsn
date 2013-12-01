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
  redirect '/musings/first'
end

# Words (blog), Work (portfolio) and About (personal infomration)
get '/words/?' do
  table_of_contents
  erb :words
end

get '/work/?' do
  @title      = 'work'
  erb :work
end

get '/about/?' do
  erb :about
end

# Markdown routes
get '/*/?' do
  render_markdown
  erb :musing
end

# 404
not_found do
  not_found
end

# 500
error do
  error
end

