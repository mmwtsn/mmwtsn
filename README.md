# mmwtsn.com

This is a very simple web site that contains my blog, portfolio and some professional information. It was written in Ruby, HTML5 and [SASS](http://sass-lang.com/) (good ol', whitespace lovin', SASS) using [Sinatra](http://www.sinatrarb.com/). It is currently hosted on [Heroku](http://www.heroku.com/). All of the blog posts are written in [Markdown](http://daringfireball.net/projects/markdown/) edited in [Mou](http://mouapp.com/).

My site is open source. Feel free to fork it, bork it, twork it as you please. Pre-requsites to join the party: 

* Ruby 1.93 or later
* RubyGems
* Sinatra
* Compass
* Bundler

To get started run `bundle install` to set up your local environment with any required RubyGems followed by `ruby mmwtsn.rb` to fire up the server. 

This site was an exercise in lightweight web design. Admittedly the format (a personal site) allowed for more flexibility than I would have encountered in a larger scale project.

Development goals for non-portfolio pages:

* No more than 5 HTTP requests.
* No more than 15kb total file size.
* Clean legible typography.
