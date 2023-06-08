/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// =============================================
//           					OICE
// =============================================
// O: Boolean representing whether input strings are anagrams of each other
// I: 2 strings 
// C: Use each string char only once
// E: Unicode Characters


// =============================================
//                  Pseudo:
// =============================================
// Given two strings as input
// Check if they have all the same letters
    // For letter in string #1, loop over string #2 to find the same char
    // If char found in string #2, pop it off and continue the first loop, ow break out of both loops and return false 
// If all letters popped off string #2, return true
var isAnagram = function(s, t) {
  const first = s.split('');
  const second = t.split('');

  for (let char of first) {
      for (let i = 0; i < second.length; i++) {
          if (char === second[i]) {
              second.splice(i, 1)
          }
      }
  }

  if (!second.length) {
      return true;
  } else {
      return false;
  }
};

// Export Logic 
if (!module) {
  module = {};
}
module.exports = isAnagram;