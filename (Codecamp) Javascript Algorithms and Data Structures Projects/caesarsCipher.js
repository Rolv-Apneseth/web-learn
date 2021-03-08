// Full Caesars Cipher

// function solveCaesar(str, shift) {
//   const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   let translated = [];
//   let index, newIndex;

//   for (let i in str) {
//     if (ALPHABET.includes(str[i])) {
//       index = ALPHABET.indexOf(str[i]);
//       newIndex = (index + shift) % 26;
//       translated.push(ALPHABET[newIndex]);

//     } else {
//       translated.push(str[i]);
//     };
//   };

//   return translated.join('');
// };

// function rot13(str) {
//   return solveCaesar(str, 13);
// };

// Solution for just rot13 (shift=13), much less flexible but faster for this simple shift solution

function rot13(str) {
  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const SHIFTED = "NOPQRSTUVWXYZABCDEFGHIJKLM";
  const translate = (letter) =>
    ALPHABET.includes(letter) ? SHIFTED[ALPHABET.indexOf(letter)] : letter;

  return str.split("").map(translate).join("");
}

// Tests
let failMessage = "Test Failed";

console.assert(rot13("SERR PBQR PNZC") == "FREE CODE CAMP", failMessage);
console.assert(rot13("SERR CVMMN!") == "FREE PIZZA!", failMessage);
console.assert(rot13("SERR YBIR?") == "FREE LOVE?", failMessage);
console.assert(
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") ==
    "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.",
  failMessage
);
