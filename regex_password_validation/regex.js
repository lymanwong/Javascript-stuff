/*
You need to write regex that will validate a password to make sure it meets the follwing criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number
Valid passwords will only be alphanumeric characters.
*/

function validate(password) {
  return /(put answer here)/.test(password);
}

validate('djI38D55') //true
validate('a2.d412') //false
validate('JHD5FJ53') //false
validate('!fdjn345') //!fdjn345 - Expected false
validate('jfkdfj3j') // 'jfkdfj3j - Expected false
validate('123') // '123 - Expected false
validate('abc') // 'abc - Expected false
validate('Password123') // 'Password123 - Expected true