/*
Write a function insertDash(num) that will insert dashes ('-') between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number.
*/

function insertDash(num) {
var numString = num.toString().split('');
var collection = [];
var previous = null;
for(var i=0; i < numString.length; i++){
  if(numString[i] % 2===0){
      collection.push(numString[i]);
      previous = "even";
    } else {
 		if (previous == "even"){
        collection.push(numString[i]);
        previous = "odd";
    		} 
    	else if (previous == "odd") {
	    	collection.push("-");
	        collection.push(numString[i]);
	        previous = "odd";
    		}
    	 else {
    	 	collection.push(numString[i]);
    	 	previous = "odd";
    		} 
    	}
	}
  debug(collection.join(''));
}


// insertDash(454793); //'4547-9-3'
//insertDash(123456); //'123456'
//insertDash(1003567); //'1003-567'
// insertDash(1191133); //'1-1-9-1-1-3-3'
insertDash(1964961); //'1-964961'
// insertDash(1177283); //'1-1-7-7283'
// insertDash(7352568); //'7-3-52568'
// insertDash(11998195); //'1-1-9-981-9-5'
// insertDash(13064952); //'1-30649-52'
