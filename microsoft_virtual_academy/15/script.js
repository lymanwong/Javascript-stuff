$(function(){
  //selecting by id
  // $('#first').addClass('highlight');

  //selecting by element
  // $('p').addClass('highlight');

  //selecting by class
  // $('.chosen').addClass('highlight');

  //selecting more than one element with a comma
  // $('#first, .chosen').addClass('highlight');

  //contains
  // $('li:contains("Three")').addClass('highlight');

  //selecting next
  // $('li:contains("Three")').next().addClass('highlight');
  // $('').addClass('highlight');

  //selecting previous
  // $('li:contains("Three")').prev().addClass('highlight');

  // siblings
  // $('li:contains("Three")').siblings().addClass('highlight');;

  // parent - in this case, it selected the parent, which is an unordered list
  // $('li:contains("Three")').parent().addClass('highlight');;

  // nth child - in this case the first child of a parent
  // $('li:nth-child(1)').addClass('highlight');

  //selecting by attribute
  // $('p[name="mySecondPara"]').addClass('highlight');

  //selecting except attribute
  // $('p[name!="mySecondPara"]').addClass('highlight');
  // or --> jquery not method
  // $('p').not('[name]').addClass('highlight');

  //selecting by section
  // $(':header').addClass('highlight');

  //selecting by empty item and adding text
  // $('p:empty').text("you are empty so here are some text");

  // selecting by even/odd line items
  $('li:even').addClass('highlight');
  $('li:odd').addClass('highlight');

});
