/**
 * @param {string} s
 * @return {boolean}
 */

// Leetcode: https://leetcode.com/problems/valid-palindrome
// Solution Video: https://bit.ly/3Paf9ik

// Time Complexity: O(n * k) where k is the delimiter length
// Space Complexity: O(n)

// =============================================
//           					OICE
// =============================================
// O: Boolean representing whether the input was a valid palindrome or not
// I: String
// C: A valid palindrome has no non-alphanumeric chacters and reads the same back and foward when all letters are lowercase.
    // Allowances: String will have printable ASCII chars only
// E: Single character string, all same chars?

// =============================================
//                  Pseudo:
// =============================================
// Given an string input of arbitrary length
// If it has non-alphanumeric in it, return false
// Convert the characters to lowercase 
// Reverse the string
// If the reversed stirng is the same as the original unmodified string, it is a valid palindrome and you can return true.
// For all other cases, return false. 

// =============================================
//              Neetcode Solution
//    Time Complexity: O(n) 
//    Space Complexity: O(1) 
// =============================================
// var isPalindrome = function(s) {
//   let left = 0;
//   let right = s.length - 1;

//   var isAlpha = (code) => {
//     return (code > 48 && code < 122) ? true : false;
//   }

//   while (left < right) {
//     while (left < right && !isAlpha(s.charCodeAt(left))) {
//       left = left + 1;
//     }
//     while (right > left && !isAlpha(s.charCodeAt(right))) {
//       right = right - 1;
//     }

//     if (s[left].toLowerCase() !== s[right].toLowerCase()) {
//       return false
//     } else {
//       left = left + 1;
//       right = right - 1;
//       return true;
//     }
//   }

// };

// =============================================
//                 My Solution
// =============================================
var isPalindrome = function(s) {

  let match;
  if (s.length < 1) return false;
  if (s.length === 1) return true;

  // Remove spaces
  // =============================================
  // Note: In python you can reverse a string in place with str[::-1] which get the entire string as a slice and then uses a negative step to reverse it
  // =============================================
  s = s.split(' ').join('').split('');

  const nonAlphaNumerics = /[a-zA-Z0-9]/g;

  // Remove nonalphanumeric characters
  for (var i = 0; i < s.length; i++) {
      alphaMatch = s[i].match(nonAlphaNumerics);
      !alphaMatch ? delete s[i] : null;
  }

  // convert string to lowercase
  s = s.join('').toLowerCase();
  const reversed = s.split('').reverse().join('');
  return reversed === s;

};

// Export Logic 
if (!module) {
  module = {};
}
module.exports = isPalindrome;