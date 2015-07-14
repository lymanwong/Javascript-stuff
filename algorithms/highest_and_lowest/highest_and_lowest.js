// function high_and_low(string){
//   var num = [];
//   arr = string.split(" ");
//   for(var i = 0; i<arr.length; i++){
//     num.push(parseInt(arr[i],10));
//   }
//   return((Math.max.apply(null,num).toString()) + " " + (Math.min.apply(null,num).toString()));
// }

// refactored

function high_and_low(string){
  arr = string.split(" ");
  return((Math.max.apply(null,arr).toString()) + " " + (Math.min.apply(null,arr).toString()));
}


print(high_and_low("1 9 3 4 -5") === "9 -5");
print(high_and_low("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6") === "542 -214");
print(high_and_low("1 -1") === "1 -1");
print(high_and_low("1 1") === "1 1");
print(high_and_low("-1 -1") === "-1 -1");
print(high_and_low("1 -1 0") === "1 -1");
print(high_and_low("1 1 0") === "1 0");
print(high_and_low("-1 -1 0") === "0 -1");
print(high_and_low("42") === "42 42");
