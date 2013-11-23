helpers do
  def valid_file? file
    halt 404 unless File.exists? file
  end

  def render_markdown
    request = params[:splat][0]

    file = "views/#{request}.md"
    valid_file? file

    post = IO.read(file)
    meta = YAML.load(post)
    body = post.split("---")[2]

    @header        = meta["title"]
    @sub_header    = meta["date"]

    @content = RDiscount.new(body).to_html
  end

  def header_image?
    @header_image ? "style=\"background-image: #{ @header_image };\"" : '' 
  end

  def link?
    @text ? "<a href=\"#{ @href }\">#{ @text }</a>" : ''
  end

  def not_found
    erb 404.to_s.to_sym
  end

  def error
    erb 500.to_s.to_sym
  end
end

