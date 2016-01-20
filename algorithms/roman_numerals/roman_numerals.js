/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

*/

function convert(num) {
  var romanNumerals = '';
  num = num.toString().split('');
  while(num.length > 0){
    if(num.length == 4) {
      if(num[0] >= 1 && num[0] <= 3){
        romanNumerals += ("M").repeat(num[0]);
        num.shift();
      }
    }
    else if(num.length == 3) {
      if(num[0] == 0) {
        num.shift();
      }
      else if (num[0] == 5){
        romanNumerals += ("D");
        num.shift();
      }
      else if (num[0] >= 6 && num[0] <= 8){
        romanNumerals += ("D") + ("C").repeat(num[0]-5);
        num.shift();
      } else {
        romanNumerals += ("CM");
        num.shift();
      }
    }
    else if(num.length == 2) {
      if(num[0] == 0){
        num.shift();
      }
      else if (num[0] >=1 && num[0] <=3) {
        romanNumerals += ("X").repeat(num[0]);
        num.shift();
      }
      else if (num[0] == 4) {
        romanNumerals += ("XL");
        num.shift();
      }
      else if (num[0] == 5) {
        romanNumerals += ("L");
        num.shift();
      }
      else if (num[0] >=6 && num[0] <= 8){
        romanNumerals += ("L") + ("X").repeat(num[0]-5);
        num.shift();
      } else {
        romanNumerals += "XC";
        num.shift();
      }
    }
    else {
      if (num == 0) {
        num.shift();
      }
      else if (num >=1 && num <= 3) {
        romanNumerals += ("I").repeat(num);
        num.shift();
      }
      else if (num == 4) {
        romanNumerals += "IV";
        num.shift();
      }
      else if (num <= 8) {
        romanNumerals += "V" + ("I").repeat(num-5);
        num.shift();
      } else {
        romanNumerals += ("I") + ("X");
        num.shift();
      }
    }
  }
  return romanNumerals;
}

//console.log(convert(5)); // "V"
//console.log(convert(9)); // "IX"
//console.log(convert(12)); // "XII"
//console.log(convert(16)); // "XVI"
//console.log(convert(29)); // "XXIX"
//console.log(convert(44)); // "XLIV"
//console.log(convert(45)); // "XLV"
//console.log(convert(68)); // "LXVIII"
//console.log(convert(83)); // "LXXXIII"
//console.log(convert(97)); // "XCVII"
// console.log(convert(99)); // "XCIX"
console.log(convert(500)); // "D"
// console.log(convert(501)); // "DI"
// console.log(convert(649)); // "DCXLIX"
// console.log(convert(798)); // "DCCXCVIII"
// console.log(convert(891)); // "DCCCXCI"
// console.log(convert(1000)); // "M"
// console.log(convert(1004)); // "MIV"
// console.log(convert(1006)); // "MVI"
// console.log(convert(1023)); // "MXXIII"
// console.log(convert(2014)); // "MMXIV"
//console.log(convert(3999)); // "MMMCMXCIX"
