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
  @title       = 'words'
  @header     = 'Musings and Tutorials'
  @sub_header = 'This title isn\'t built yet.'

  @href       = ''
  @text       = ''

  erb :words
end

get '/work/?' do
  @title       = 'work'
  @header      = 'Recent Work'
  @sub_header  = 'Design and web development samples'

  @href        = 'mailto:hi@mmwtsn.com'
  @text        = 'hire maxwell'

  erb :work
end

get '/about/?' do
  @title      = 'about'
  @class      = @title
  @header     = 'About Maxwell'
  @sub_header = 'Full-stack web development and design'

  @href       = 'mailto:hi@mmwtsn.com'
  @text       = 'contact maxwell'

  erb :about
end

# Markdown routes
get '/*/?' do
  render_markdown

  @title      = @header
  @class      = 'musing'

  #@href       = hn_link
  @href       = '#' # TODO - BUILD THIS
  @text       = 'discuss on hacker news'

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

