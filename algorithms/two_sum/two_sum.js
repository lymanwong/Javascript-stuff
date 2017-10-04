/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

var twoSum = function(nums, target) {
  var result = [];
  for(var i = 0; i < nums.length; i++ ) { //grab each number from nums
    for(var j = 1; j < nums.length; j++) { //loop over nums again
      if(nums.length == 2 && nums[i] + nums[j] == target){
        return ([i,j]);
      } else if(nums[i] + nums[j] == target) { //add numbers to see if it equals the target
        var collectionArray = []; //create a new array to collect true
        collectionArray.push(i,j);  //add the numbers to the collection array
        collectionArray.sort(); //sort the collection array so that the same pairs line up next to each other
        if(result.length < 1 ){ //check if there is anything in the results array
          result.push(collectionArray); //if not, fill the results array
          } else { //if there is something in the results array, you can use it to look for dupes
          for(var k = 0; k < result.length; k++) { //loop over the results array
            if(collectionArray.toString() !== result[k].toString()) { //if the collection array doesn't mach an array in the results
              result.push(collectionArray); //add the array into the results array
            } else { //if you find a duplicate array
              result.splice(k+1); //remove the duplicate array from the results array
            }
          }
        }
      }
    }
  }
  var newArr = []; //create a new array
  for(var l = 0; l < result.length; l++){ //loop over the results array
    if(result.length == 1) { //if the nested array contains only a single array
    newArr = newArr.concat(result[l]); //make the nested array into just an array
    return (newArr); //spit out the newly formatted array
    }
    else if (result[l][0] == result[l][1]) {
        result.splice(l);
    return (result[0]); //spit out the newly formatted array
    }
  }
  return(result); //return the nested array
};

console.log(twoSum([2,5,5,11], 10)) //[1,2]
console.log(twoSum([3,2,3], 6)) //[0,2]
console.log(twoSum([3,3], 6)); //[0,1]
console.log(twoSum([2, 7, 11, 15], 9)); //[1,2]
console.log(twoSum([2, 5, 8, 1, 4, 6, 9, 3, 7], 9)); //[ [ 0, 8 ], [ 1, 4 ], [ 5, 7 ] ]
console.log(twoSum([3,2,4], 6)); //[1,2]
