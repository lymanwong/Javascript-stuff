/* Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

Math.round()
Math.ceil()
Math.floor()

*/


Math.round = function(number) {
	var stringNumber = number.toString();
	var isWholeNumber = Number.isInteger(number);
	var decimalLocation = stringNumber.indexOf(".");
	var wholeNumbers = stringNumber.slice(0,decimalLocation);
	var decimalNumbers = stringNumber.slice(decimalLocation + 1, stringNumber.length);
	if (isWholeNumber === true) {
		if (wholeNumbers == 0 && decimalNumbers == 0) {
			return 0;
		} else {
			return number;
		}
	} else if (decimalNumbers[0] >= 5){
		return parseInt(wholeNumbers) + 1;
	} else { 
		return parseInt(wholeNumbers); 
	}
};

Math.ceil = function(number) {
  	var stringNumber = number.toString();
  	var isWholeNumber = Number.isInteger(number);
	var decimalLocation = stringNumber.indexOf(".");
	var wholeNumbers = stringNumber.slice(0,decimalLocation);
	var decimalNumbers = stringNumber.slice(decimalLocation + 1, stringNumber.length);
	if (isWholeNumber === true) {
		if (wholeNumbers == 0 && decimalNumbers == 0) {
			return 0;
		} else {
			return number;
		}
	} else {
	return parseInt(wholeNumbers) + 1;
	}
};

Math.floor = function(number) {
  	var stringNumber = number.toString();
  	var isWholeNumber = Number.isInteger(number);
	var decimalLocation = stringNumber.indexOf(".");
	var wholeNumbers = stringNumber.slice(0,decimalLocation);
	var decimalNumbers = stringNumber.slice(decimalLocation + 1, stringNumber.length);
	if (isWholeNumber === true) {
		if (wholeNumbers == 0 && decimalNumbers == 0) {
			return 0;
		} else {
			return number;
		}
	} else {
	return parseInt(wholeNumbers);
	}
};

debug(Math.round(7.12)); //7
debug(Math.round(2.499999)); //2
// debug(Math.round(0)); //0
// debug(Math.round(0.4)); //0
// debug(Math.round(0.5)); //1
// debug(Math.round(0.6)); //1
// debug(Math.round(2.5)); //3
// debug(Math.round(4.4)); //4
// debug(Math.round(5)); //5
// debug(Math.round(2.499999)); //3

// debug(Math.ceil(0)); //0
// debug(Math.ceil(5)); //5
// debug(Math.ceil(0.4)); //1
// debug(Math.ceil(2.5)); //3
// debug(Math.ceil(4.5)); //5

// debug(Math.floor(0.4)); //0
// debug(Math.floor(0.5)); //0
// debug(Math.floor(0)); //0
// debug(Math.floor(5)); //5