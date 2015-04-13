//$(document).ready(function(){
$(function() {//shorter version of above
  // start up code goes here
  // alert("this works! W00T!");

  //Changing the text of an H1
  // $('#title').text("Yeah, I can now ge at the H1 immediately");

  //replacing text
  // $('#first').html("<h2>Great quotes</h2>");

  //prepend - adding text before a given selection
  $('#first').prepend("<h2>Great quotes</h2>");

  //append - adding text after a given selection
  $('#first').append("<h2>...for you to ponder on...</h2>");

  //before, after, insertBefore, insertAfter work OUTSIDE the given selection

  //Changing an attribute
  //$('#myAnchor').attr("href", "http://hotmail.com");

  //chaning font attribute
  $("#title").addClass("standout");
});

//Attaching an image to the DOM
// $('<div id="badge"><img src="badge.gif" alt="badge earned for achievement"</div>')

//Attaching an alert
// $.muCustomMethod = function {alert('hi');};

// $.listBox = {
//   show: function() { },
//   hide: function() { },
//   position: function() { },
//   initiate: function() { },
// };

// $('cssSelectorGoesHere') // becomes a jQuery object

