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


function join(array){
  var a = ''
  for(var i = 0; i < array.length; i++){
    a += array[i]
  }
  return a
};
