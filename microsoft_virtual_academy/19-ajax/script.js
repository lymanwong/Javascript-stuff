$(function(){
  $('#clickme').click(function(){
  //Json version
  //   $.getJSON('http://ip.jsontest.com/', function(data){
  //     var items = [];
  //     $.each(data, function(key,value){
  //       items.push('<li id="' + key + '">' + value + '</li>');
  //     });

  //     $('<ul/>', {
  //       'class': 'interest-list',
  //       html: items.join('')
  //     }).appendTo('body');
  //   });
  // });

  //ajax version
    $.ajax({
      url: 'http://ip.jsontest.com/',
      dataType: 'json',
      success: function(data){
        var items = [];
        $.each(data, function(key,value){
          items.push('<li id="' + key + '">' + value + '</li>');
        });

        $('<ul/>', {
          'class': 'interest-list',
          html: items.join('')
        }).appendTo('body');

      },//if there was some sort of issue...
      statusCode: {
        404: function(){
          alert('There was a problem with the server.');
        }
      }
    });
  });
});
