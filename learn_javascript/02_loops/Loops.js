function repeat(word, count){
  if (count === 0){
    return("");
  } else {
    var a = ''
    for(var i = 0; i < count; i++){
      a += word;
    };
    return a;
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
    words = array.toString().replace(/,/g , delimiter);
  }
  return words;
};

function sum(array){
  total = 0
  for(var i = 0; i < array.length; i++){
    total += parseInt(array[i]);
  };
  return total;
};

function paramify(hash){
  var array = [];
  if (Object.keys(hash).length>0){
    for(var key in hash) {
      array.push(key + "=" + hash[key]);
    }
    return (array.sort().join("&"));
  }
  else {
    return("");
  };
};

function factorial(num){
  var total = 1;
  if(num == 0){
    total;
  }
  else {
    for(var i = 1; i <= num; i++){
      total *= i;
    }
  }
  return (total);
};
