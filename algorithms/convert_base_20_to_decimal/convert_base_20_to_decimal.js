function convertBase20ToDecimal(init){
  var num = 0;
  init = init.split('').reverse();
  for (var i=0; i<init.length; i++) {
    if(Number(init[i]) >= 0 && Number(init[i]) <= 9) {
      num += (init[i] * Math.pow(20, i));
       }
    else if (parseInt(init[i],20) >= 10 && parseInt(init[i],20) < 20){
      num += (parseInt(init[i],20) * Math.pow(20,i));
       }
    else {
      return -1;
    }
  }
  return num;
}

console.log(convertBase20ToDecimal( "1" ) == 1);
console.log(convertBase20ToDecimal( "A" ) == 10);
console.log(convertBase20ToDecimal( "7E" ) == 154);
console.log(convertBase20ToDecimal( "A1J" ) == 4039);
console.log(convertBase20ToDecimal( "10A5" ) == 8205);
