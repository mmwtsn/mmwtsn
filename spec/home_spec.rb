require 'spec_helper'

describe 'When the home page is requested' do
	it 'it should return "Morning."' do
		get '/'
    last_response.should be_ok
		last_response.should match(/Morning/)
	end
end

describe 'Markdown routes' do
  it 'should return 200 if the file exists' do
    files = Dir.glob('__FILE__/views/musings/*.md')
    files.each do |x|
      x.slice!('.md')
      get "/#{x}"
      last_response.should be_ok
    end
  end
end

describe 'Unmatched routes' do
  it 'should return 404' do
    get '/typo'
#last_response.code.should == 404
    last_response.status.should == 404
  end
end
