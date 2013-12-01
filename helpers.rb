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

  def link
    @text ? "<a href=\"#{ @href }\">#{ @text }</a>" : ''
  end

  # TODO - "Post" is the conventional term for all blog writing;
  # replace "musing" for "post" across the site to increase
  # the code's readability

  def parse_file (target, *args)
    metadata = YAML.load(IO.read(target))

    # Build the post URL from the filename
    # by removing the filepath and file type
    url = target + "/"
    url.slice! "views"
    url.slice! ".md"

    # Create a new Date object to manipulate
    d = Date.parse(metadata["date"])

    # Format the datetime from the date
    numerical_date = d.strftime("%D")
    english_date   = d.strftime("%B %-d, %Y")
    date_object    = d

    # Ensure @musings is defined, otherwise create a new array
    @musings = @musings || []

    # Add current post to the unsorted array of posts as a hash
    @musings.unshift({
      :numerical_date => numerical_date,   # Used by datetime attribute of the HTML5 <time> element
      :english_date   => english_date,     # Readable date printed on the page
      :date_object    => date_object,      # Ruby Date object used for sorting the @musings array
      :post_title     => metadata["title"],
      :post_url       => url
    })

    # Sort each post by date to build a chronological list of posts
    @musings.sort_by {|musing| musing[:date_object]}
  end

  def table_of_contents
    musings = File.join("views/musings", "*.md")

    all_musings = Dir.glob(musings)

    all_musings.each do |musing|
      parse_file musing, "title", "date"
    end
  end

  def not_found
    erb 404.to_s.to_sym
  end

  def error
    erb 500.to_s.to_sym
  end
end

