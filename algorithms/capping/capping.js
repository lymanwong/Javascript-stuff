function capMe(array){
  var capitalized_words = [];
  for(var i=0; i<array.length; i++) {
    cap_word = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    capitalized_words.push(cap_word);
  }
 return capitalized_words;
};

capMe(['jo', 'nelson', 'jurie'])
capMe(['KARLY', 'DANIEL', 'KELSEY'])
