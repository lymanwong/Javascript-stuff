$(function (){
  // alert("hello");
  $( "#tabs" ).tabs().tabs("add","../16/C9JS_16.html","Click-a-bob");

  $( "#datepicker" ).datepicker({
    onSelect: function(dateText,inst){
      $('#title').text("you picked: " + dateText);
    }
  });
});

