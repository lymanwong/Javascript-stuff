function repeat(word, count){
  if (count === 0){
    return("");
  } else {
    var a = ''
    for(var i = 0; i < count; i++){
      a += word
    };
    return a
  }
};


function join(array, delimiter){
  var words = '';
  delimiter = delimiter || 0
  if (array.length == 0){
    return "";
  }
  else if (delimiter == 0){
    words = array.toString().replace(/,/g , '');
  }
  else {
    // for(var i = 0; i < array.length; i++) {
    //   words += array[i] + delimiter;
    // }
    words = array.toString().replace(/,/g , delimiter);
  }
  return words;
};
