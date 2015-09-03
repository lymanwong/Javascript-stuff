/*Write a function that determines if given number is a power of two. A power of two means a number of the form 2^n where n is an integer
i.e. the result of exponentiation with number two as the base and integer n as the exponent.
I.e. 1024 is a power of two: it 2^10.
*/

function isPowerOfTwo(number){
  var counter = 0;
  //if(number%2 === 0){
  while(number >= 0){
      number/=2;
      counter += 1;
      debug(number)
   }
  // } else {
  //   print("False");
  // };
  return(counter);
};


debug(isPowerOfTwo(4096)) // -> true
// isPowerOfTwo(333)  // -> false
