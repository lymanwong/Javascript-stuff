/*
You are given an array of values.

Sum every number value in the array, and any nested arrays (to any depth).

Ignore all other types of values.
*/

function arraySum(arr){
var sum = 0;
for(var i=0; i<arr.length; i++){
  if(typeof arr[i] === 'number'){
    sum += arr[i];
    }
  else {
      for(var j=0, len=arr[i].length; j<len; j++){
        sum += arr[j];
      }
  }
}
return sum;
}

//debug(arraySum([1,2])); //3
//debug(arraySum([1,2,3])); //6
debug(arraySum([1,2,[1,2]])); //6
