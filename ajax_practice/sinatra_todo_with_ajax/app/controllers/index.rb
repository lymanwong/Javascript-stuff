require 'sinatra'
require 'json'
# require 'pry-debugger'

#using a global var to mimic a call to an ActiveRecord db
$todos = []

get '/' do
  erb :index
end

post '/todos' do
 $todos << params[:todo_item]

 if request.xhr? #if AJAX
  # $todos.to_json
  return erb :"_items_list", layout: false
 else
  redirect to ('/')
 end
end
