/*
Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for ruby). Return the final value after execution is complete.

function add(num) {
  return num + 1
}

function mult(num) {
  return num * 30
}

chain(2, [add, mult]);
// returns 90;
*/

function chain(number, functions){

function add(x){
  return x + 1;
}

function mult(x){
  return x * 30;
}
add();
//mult();
}

debug(chain(2)) // 90
