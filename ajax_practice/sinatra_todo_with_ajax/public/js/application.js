$(document).ready(function() {
  //prevent the form from submitting
  $('.add-todo-form').on('submit', function(event){
    event.preventDefault();

  //get form details object
  var input = $(this).find('input[name="todo_item"]')

  //get text
  var value = input.val();

  //reset txt entry field to be empty so prv entry does not stay
  input.val('');

  //send data via ajax
  var request = $.ajax({
    method: 'post',
    url: '/todos',
    data: {
      todo_item: value
    },
  })

  //after getting a response from the server
  //do this callback
  request.done(function(response){

  //Goal: re-render part of the page with new data

    //parse response into an array of todo items
    var items = JSON.parse(response);

    //find the ul
    var ul = $('.todo-items');

    //empty ul
    ul.html('');

    //populate ul with new lis from our list
    var html = items.forEach(function(item){
      $('<li>').text(item).appendTo(ul);
    });
  });
  });
});
