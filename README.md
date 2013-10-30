# mmwtsn.com

This is a very simple web site that contains my blog, portfolio and some personal information. It was started as an exercise in lightweight web development and was built in Ruby, HTML5 and [SASS](http://sass-lang.com/) using [Sinatra](http://www.sinatrarb.com/). All of the blog posts are written in [Markdown](http://daringfireball.net/projects/markdown/) and processed with [rdiscount](https://github.com/davidfstr/rdiscount).

**It is still being developed and is not currently complete.**

## BUILDING LOCALLY
My site is open source. Feel free to fork it, bork it, twerk it as you please. To run the site locally you'll need:

* Ruby 1.93 or later
* RubyGems
* Bundler

To get started run `bundle install` to set up your local environment with any required RubyGems followed by `shotgun` to fire up the server.

## DEVELOPMENT GOALS
Development goals for non-portfolio pages:

* No more than 5 HTTP requests.
* No more than 15kb total file size.
* Completely responsive down to 320px.
* Vanilla JavaScript.
* Clean legible typography.

## TODO
Features to be built:

* Deploy to `http://mmwtsn.com/`.
* Continuous integration.
* Basic test coverage.
* Basic page caching.

