/**
 * @param {string} s
 * @return {number}
 */

// =============================================
//           					OICE
// =============================================
// O: int representing length of longest substring
// I: String
// C: No repeating chars in substring, you may not skip letters (subsequece -- pwke from pwwkew is not valid)
// E: String with all the same chars, string of len 1

// =============================================
//            Interviewer Questions
// =============================================
// No duplicate characters in the substring, even if they aren't contiguous duplicates?
// Can I assume valid inputs? (String will never have length 0)
// Can I assume English characters? 
// A substring is a contiguous non-empty sequence of characters within a string. Are spaces considered valid when found in the substring? What about digits and symbols?

// =============================================
//           		NeetCode Solution
// =============================================
// Time & Space Complexity both O(n)
var lengthOfLongestSubstring = function(s) {
  let charSet = new Set();
  let length = 0;
  let maxLength = 0;

  for (var i = 0; i < s.length; i++) {
    while (charSet.has(s[i])) {
      charSet.delete(s[length])
      length += 1;
    }
    charSet.add(s[i]);
    maxLength = Math.max(maxLength, i - length + 1);
  }

  return maxLength;
};

// =============================================
//           			My Solution
// =============================================
// var lengthOfLongestSubstring = function(s) {
//   // If input string has length 1, return 1
//   if (s.length === 1) return 1;

//   // Initialize maxLength to length 0
//   let maxLen = 0;
//   let length = 0;
//   let chars = [];

//   // // For each char in the input string
//   for (var i = 0; i < s.length; i++) {
//       // Track current length by incrementing by 1 for each non-repeating non-space char in the string
//       if (s[i] !== ' ' && !chars.includes(s[i])) {
//           length += 1;
//           chars.push(s[i]);
//       } else {
//           // Otherwise if current length is gt maxLength, overwrite max with the new int
//           maxLen = Math.max(length, maxLen);
//           length = s[i] = ' '? 1 : 0;
//       }
//   }

//   // Return maxLength
//   return Math.max(length, maxLen);
// };

if (!module) {
  let module = {};
}
module.exports = lengthOfLongestSubstring;