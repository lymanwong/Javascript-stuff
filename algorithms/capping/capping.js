function capMe(array){
  var capitalized_words = [];
  for(var i=0; i<array.length; i++){
    cap_word = array[i].toLowerCase().charAt(0).toUpperCase() + array[i].slice(1).toLowerCase();
    capitalized_words.push(cap_word);
  }
 debug(capitalized_words);
};

capMe(['jo', 'nelson', 'jurie'])
capMe(['KARLY', 'DANIEL', 'KELSEY'])
