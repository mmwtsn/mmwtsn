helpers do
  def valid_file? file
    halt 404 unless File.exists? file
  end

  # TODO - Fix the current metadata struture;
  # "date" shouldn't be used for all h2 content areas

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

  def link
    @text ? "<a href=\"#{ @href }\">#{ @text }</a>" : ''
  end

  def parse_file (target, *args)
    metadata = YAML.load(IO.read(target))

    # Build the post URL from the filename
    # by removing the filepath and file type
    url = target
    url.slice! "views"
    url.slice! ".md"

    # Create a new Date object to manipulate
    d = Date.parse(metadata["date"])

    # Ensure @posts is defined, otherwise create a new array
    @posts = @posts || []

    # Add current post to the unsorted array of posts as a hash
    @posts.unshift({
      :numerical_date => d.strftime("%D"),           # Used by datetime attribute of the HTML5 <time> element
      :english_date   => d.strftime("%B %-d, %Y"),   # Readable date printed on the page
      :date_object    => d,                          # Ruby Date object used for sorting the @posts array
      :post_title     => metadata["title"],
      :post_url       => url
    })

    # Sort each post by date to build a chronological list of posts
    @posts.sort_by {|post| post[:date_object]}
  end

  def table_of_contents
    posts = Dir.glob(File.join("views/musings", "*.md"))

    posts.each do |post|
      parse_file post, "title", "subtitle"
    end
  end

  def not_found
    erb 404.to_s.to_sym
  end

  def error
    erb 500.to_s.to_sym
  end
end

