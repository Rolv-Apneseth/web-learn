const TRANSLATIONS = [
  {
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
  },
  {
    9: "XC",
    8: "LXXX",
    7: "LXX",
    6: "LX",
    5: "L",
    4: "XL",
    3: "XXX",
    2: "XX",
    1: "X",
  },
  {
    9: "CM",
    8: "DCCC",
    7: "DCC",
    6: "DC",
    5: "D",
    4: "CD",
    3: "CCC",
    2: "CC",
    1: "C",
  },
  {
    3: "MMM",
    2: "MM",
    1: "M",
  },
];

function splitToDigits(num) {
  return num.toString().split("").reverse();
}

function convertToRoman(num) {
  let roman = [];
  let numbers = splitToDigits(num);

  for (let i in numbers) {
    roman.unshift(TRANSLATIONS[i][numbers[i]]);
  }

  return roman.join("");
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

// When run on leetcode problem:
// Runtime: 156 ms, faster than 84.53% of JavaScript online submissions for Integer to Roman.
// Memory Usage: 45.1 MB, less than 71.75% of JavaScript online submissions for Integer to Roman.
