/*
Finish the solution so that it takes an input 'n' (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.

Assume: 0 <= n < 1000000000

       1  ->           "1"
      10  ->          "10"
     100  ->         "100"
    1000  ->       "1,000"
   10000  ->      "10,000"
  100000  ->     "100,000"
 1000000  ->   "1,000,000"
35235235  ->  "35,235,235"
*/

function groupedByCommas(number){
  var reverse_num = number.toString().split("").reverse().join("");
  var num_commas = Math.ceil((number.toString().length/3)-1)
  var num_arr = (""+number).split("").reverse();
  if (num_commas === 0){
    return(number)
  }
  else if (num_commas === 1){
      var newnum = reverse_num.toString().slice(0,3) + "," + reverse_num.toString().slice(3);
  }
  else {
    var newnum = reverse_num.toString().slice(0,3) + "," + number.toString().slice(3,6) + "," + reverse_num.toString().slice(6);
  }
  return newnum.split("").reverse().join("");
};


debug(groupedByCommas(1));
debug(groupedByCommas(12));
debug(groupedByCommas(123));
debug(groupedByCommas(1234));
debug(groupedByCommas(12345));
debug(groupedByCommas(123456));
debug(groupedByCommas(12345678));
debug(groupedByCommas(123456789));
