function processString(str) {
  return str.replace(/\W|[_]/g, "").toLowerCase();
}

// Slower version

// function reverseString(str) {
//   return str.split('').reverse().join('')
// }

// function palindrome(str) {
//   let processedStr = processString(str);
//   let reversedStr = reverseString(processedStr);

//   return processedStr == reversedStr;
// }

// Faster version
function palindrome(str) {
  let result = true;
  let processedStr = processString(str);

  let i = 0;
  let j = processedStr.length - 1;

  while (i < processedStr.length / 2) {
    if (processedStr[i] != processedStr[j]) {
      result = false;
      break;
    }

    i++;
    j--;
  }

  return result;
}

// Tests
let failString = "Test Failed";

console.assert(palindrome("not a palindrome") == false, failString);
console.assert(palindrome("_eye") == true, failString);
console.assert(palindrome("almostomla") == false, failString);
console.assert(palindrome("My age is 0, 0 si ega ym.") == true, failString);
console.assert(palindrome("five|_/|four") == false, failString);

// When run on leetcode problem https://leetcode.com/problems/valid-palindrome/:
// Runtime: 88 ms, faster than 92.50% of JavaScript online submissions for Valid Palindrome.
// Memory Usage: 40.3 MB, less than 98.61% of JavaScript online submissions for Valid Palindrome.
