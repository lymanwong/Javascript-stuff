window.onload = function(){
  //Example 1
  // var clickMeButton = document.getElementById('clickMe');

  //Example 2 - condensed version of above
  // clickMeButton.onclick = runTheExample;
  document.getElementById('clickMe').onclick = runTheExample
}
  //Example 1
// function runTheExample(){
//   alert("running the example");
// }

function runTheExample(){
  //Example 3 - grabbing an element by ID
  // var myElement = document.getElementById('second');
  // var myNodeName = myElement.nodeName;
  // // alert(myNodeName);

  //Example 4 - Grabbing and then changing an element
  // if (myElement != null){
  //   alert(myElement.innerHTML)
  // }
  // document.getElementById('second').innerHTML = "See how I can set the text here?";

  //Example 5 - Grabbing an element by tag name
  // var listofParagraphs = document.getElementsByTagName('p');
  // // alert(listofParagraphs.length);
  // var secondParagraph = listofParagraphs[1];
  // alert(secondParagraph.innerHTML);

  //Example 6 - finding a parent element
  // myElement = document.getElementById('second');
  // alert(myElement.parentNode.nodeName);

  //Example 7 - navigating the dom
  // myElement.childNodes[0];
  // myElement.firstChild;
  // myElement.lastChild;
  // myElement.nextSibling;
  // myElement.previousSibling;

  //Example 8 - modyfying the dom attributes
  // var anchor = document.getElementById('myAnchor');
  // // var anchorDestination = anchor.href;
  // // alert(anchorDestination);
  // anchor.href = "http://www.google.com";
}
