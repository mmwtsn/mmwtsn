helpers do
  def valid_route? route
    halt 404 unless File.exists? "views/#{route}.md"
  end

  def render_markdown
    route = params[:splat][0]

    if route.slice(8,1) == '_'
      halt 404
    end

    valid_route? route
    markdown route.to_sym
  end

  def not_found
    erb 404.to_s.to_sym
  end

  def error
    erb 500.to_s.to_sym
  end
end

