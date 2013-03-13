require 'sinatra'
require 'rdiscount'

# for all markdown files, use FIXME.erb as layout
set :markdown, :layout_engine => :erb, :layout => :layout

get "/" do
  erb :work
end

get "/readme" do
  markdown :readme
end

get "/*/?" do
  route = params[:splat][0]
  halt 404 unless File.exists? "views/#{route}.erb"
  erb route.to_sym
end

not_found do
  erb 404.to_s.to_sym
end

error do
  erb 500.to_s.to_sym
end
