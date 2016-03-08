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

  console.log(value);

  });
});
