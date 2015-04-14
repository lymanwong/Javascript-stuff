$(function(){
  // var version = "1.2" //keeping variables in jquery prevents polluting global namespace
  // alert(window.version); //shows undefined
  // alert(VARIABLES.version); //shows version
  // alert(VARIABLES.planet.name);

  //degrading gracefully
  // $('#clickme').click(function(){
  //   $('#main').append('you should only see this if you click the plus');
  // });

  $('#main').append("<img src='plus-8.png' alt='click me to see the paragraph' id='clickme' />");


  $('#clickme').toggle(function(){
    $('#message').show('fast');
    $('#clickme').attr('src', 'minus-8.png');

  }, function () {
    $('#message').hide('slow');
    $('#clickme').attr('src', 'plus-8.png');
  })

  $('#message').hide();

});

//pollutes global namespace
// var version = "1.2"

//singleton pattern - creating a global variable to house our variables
// var VARIABLES = {};
// VARIABLES.version = "1.2"

// VARIABLES.planet = {
//   id:34,
//   name:"Saturn"
// }
