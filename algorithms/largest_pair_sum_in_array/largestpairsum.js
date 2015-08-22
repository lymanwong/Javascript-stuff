/*
Given an array of numbers, find the largest pair sum in the array.

For example

[10,14,2,23,19] should return 42 (i.e. sum of 23,19)

[99,2,2,23,19] should return 122 (i.e. sum of 99,23)

Input array contains minimum two elements and every element is a number.
*/

function largestpairsum(numbers) {
  var sorted_array = numbers.sort(function(a,b){
    return a-b;
  });
  return (sorted_array[sorted_array.length-1]) + (sorted_array[sorted_array.length-2])
}

debug(largestpairsum([10,14,2,23,19]));
debug(largestpairsum([99,2,2,23,19]));
