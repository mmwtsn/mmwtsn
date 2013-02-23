#!/usr/bin/ruby
# this contains the table of contents for my blog

class Blog
  def create(id, h1, h2, date, desc)
    @blog_id = id
    @blog_h1 = h1
    @blog_h2 = h2
    @blog_date = date
    @blog_desc = desc
  end
end

blog1 = Blog.new("1", "test header", "test subheader", "december 30th, 2012", "this is a test description of my blog")