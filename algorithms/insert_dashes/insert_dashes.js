/*
Write a function insertDash(num) that will insert dashes ('-') between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number.
*/

function insertDash(num) {
var numString = num.toString().split('');
var collection = [];
for(var i=0; i < numString.length; i+=1){
  if(numString[i]%2===0){
      collection.push(numString[i]);
    }else{
      collection.push("-");
        collection.push(numString[i]);
    }
}
  debug(collection.join(''));
}


insertDash(454793); //'4547-9-3'
//insertDash(123456); //'123456'
//insertDash(1003567); //'1003-567'
