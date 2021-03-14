// Matches a phone number in the correct format and with the correct country code
// for US phone numbers

function telephoneCheck(str) {
  const regex = /^([1]{0,1}[ ]{0,1})(\(\d{3}\)|\d{3})( |-){0,1}(\d{3})( |-){0,1}(\d{4})$/;

  return str.match(regex) ? true : false;
}

// tests
let failMessage = "Test Failed";

console.assert(telephoneCheck("555-555-5555"), failMessage);
console.assert(telephoneCheck("(555)555-5555"), failMessage);
console.assert(telephoneCheck("(555) 555-5555"), failMessage);
console.assert(telephoneCheck("555 555 5555"), failMessage);
console.assert(telephoneCheck("5555555555"), failMessage);
console.assert(telephoneCheck("1 555 555 5555"), failMessage);
console.assert(telephoneCheck("1(555)555-5555"), failMessage);
console.assert(!telephoneCheck("1 555)555-5555"), failMessage);
console.assert(telephoneCheck("1 456 789 4444"), failMessage);
console.assert(!telephoneCheck("123**&!!asdf#"), failMessage);
console.assert(!telephoneCheck("(6054756961)"), failMessage);
console.assert(!telephoneCheck("2 (757) 622-7382"), failMessage);
console.assert(!telephoneCheck("555)-555-5555"), failMessage);
