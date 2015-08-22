/*
You have an array of numbers 1 through 10 (JS: 1 through 10 or less). The array needs to be formatted correctly for the person reading the countdown of a spaceship launch.

Unfortunately, the person reading the countdown only knows how to read strings. After the array is sorted correctly make sure it's in a format he can understand.

Between each number should be a space and after the final number (1) should be the word 'liftoff!'

Example:
// Given
instructions = [8,1,10,2,7,9,6,3,4,5]
// Should return
"10 9 8 7 6 5 4 3 2 1 liftoff!"
// Given
instructions = [1,2,4,3,5]
// Should return
"5 4 3 2 1 liftoff!"
*/

// function liftoff(instructions) {
//   var sorted_instructions = instructions.sort(function(a,b){
//     return a-b;
//   })
//   return sorted_instructions.reverse().join(" ") + " liftoff";
// };

//=================================

//refactored

function liftoff(instructions) {
  return instructions.sort(function(a,b){return a-b;}).reverse().join(" ") + " liftoff";
};

debug(liftoff([8,1,10,2,7,9,6,3,4,5]));
debug(liftoff([1,2,4,3,5]))
