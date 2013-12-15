# Load Rubygems
require 'bundler'
Bundler.require

# Load helper methods
require './helpers'

# Index
get '/?' do
  redirect '/words'
end

# Portfolio page
get '/work/?' do
  erb :work
end

# Words (blog), Work (portfolio) and About (personal infomration)
get '/words/?' do
  table_of_contents
  erb :words
end

# Markdown routes
get '/*/?' do
  render_markdown
  erb :post
end

# 404
not_found do
  not_found
end

# 500
error do
  error
end

