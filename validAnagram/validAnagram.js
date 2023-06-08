
// Leetcode: https://leetcode.com/problems/valid-anagram/submissions/966693437/
// Solution Video: https://www.youtube.com/watch?v=3OamzN90kPg

// Time Complexity: O(n ** 2)

// =============================================
//           		Today I Learned: 
// =============================================
// About using Label Statements to Break Out of Outer loops from an inner loop
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label

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

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const first = s.split('');
  const second = t.split('');

  if (first.length !== second.length || s.length !== t.length) {
    return false;
  };

  outerLoop: // See note about Label Statements above
    for (let char of first) {
        for (let i = 0; i < second.length; i++) {
            if (char === second[i]) {
                second.splice(i, 1)
                continue outerLoop;
            } else if (i === (second.length - 1)) {
                return false;
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