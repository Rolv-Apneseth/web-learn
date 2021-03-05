const TRANSLATION = {
  3000: "MMM",
  2000: "MM",
  1000: "M",
  900: "CM",
  800: "DCCC",
  700: "DCC",
  600: "DC",
  500: "D",
  400: "CD",
  300: "CCC",
  200: "CC",
  100: "C",
  90: "XC",
  80: "LXXX",
  70: "LXX",
  60: "LX",
  50: "L",
  40: "XL",
  30: "XXX",
  20: "XX",
  10: "X",
  9: "IX",
  8: "VIII",
  7: "VII",
  6: "VI",
  5: "V",
  4: "IV",
  3: "III",
  2: "II",
  1: "I",
  0: "",
};

function splitToDigits(num) {
  return num.toString().split("").reverse();
}

function digitsToNumbers(split) {
  let newSplit = [];

  for (let i in split) {
    newSplit.push((parseInt(split[i]) * Math.pow(10, i)).toString());
  }

  return newSplit.reverse();
}

function convertToRoman(num) {
  let roman = "";
  let numbers = digitsToNumbers(splitToDigits(num));

  for (let i in numbers) {
    roman += TRANSLATION[numbers[i]];
  }

  return roman;
}

// TESTS
let failMessage = "Test Failed";

console.log(convertToRoman(798));
console.assert(convertToRoman(2) == "II", failMessage);
console.assert(convertToRoman(16) == "XVI", failMessage);
console.assert(convertToRoman(45) == "XLV", failMessage);
console.assert(convertToRoman(97) == "XCVII", failMessage);
console.assert(convertToRoman(400) == "CD", failMessage);
console.assert(convertToRoman(501) == "DI", failMessage);
console.assert(convertToRoman(649) == "DCXLIX", failMessage);
console.assert(convertToRoman(798) == "DCCXCVIII", failMessage);
console.assert(convertToRoman(891) == "DCCCXCI", failMessage);
console.assert(convertToRoman(1004) == "MIV", failMessage);
console.assert(convertToRoman(1023) == "MXXIII", failMessage);
console.assert(convertToRoman(2014) == "MMXIV", failMessage);
console.assert(convertToRoman(3999) == "MMMCMXCIX", failMessage);
