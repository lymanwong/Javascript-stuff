var xmlHttp = createXmlHttpRequestObject();

//create object to communicate to server
function createXmlHttpRequestObject() {
  var xmlHttp;

  //make ajax to work for IE users
  if(window.ActiveXObject) {
    try {
      //set object to the variable in IE
      xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch(e) {
      xmlHttp = false;
    }
  } else {
    try {
      xmlHttp = new XMLHttpRequest();
    } catch(e) {
      xmlHttp = false;
    }
  }
}

  if(!xmlHttp)
    alert("Can't create that object bro");
  else
    return xmlHttp;

//create function to communicate with server
function process(){
  if(xmlHttp.readyState==0 || xmlHttp.readyState==4) {
    hero = encodeURIComponent(document.getElementById("userInput").value);
    xmlHttp.open("GET", "comicbookstore.php?hero=" + hero, true);
    //handle server response
    xmlHttp.onreadystatechange = handleServerResponse;
    xmlHttp.send(null);
  } else {
    setTimeout('process()', 1000);
  }
}

//handling XML response from server
function handleServerResponse(){
  //check xml file for errors
  if(xmlHttp.readyState==4) {
    if(xmlHttp.readyState==200) { //ok
      xmlResponse = xmlHttp.responseXML;
      xmlDocumentElement = xmlResponse.documentElement;
      message = xmlDocumentElement.firstChild.data;
      document.getElementById("userInput").innerHTML = '<span style="color:red">'+ message + '</span>';
      setTimeout('process()', 1000);
    } else {
      alert ('Something went wrong :( ');
    }
  }
}
