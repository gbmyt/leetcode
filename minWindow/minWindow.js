/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

// =============================================
//           					OICE
// =============================================
// O: Min substring that contains all letters in t (including duplicates)
// I: Two strings s and t of lengths m and n respectively
// C: 
    // - The answer is unique. 
    // - Every character in t (including duplicates) should be included in the window
    // - s and t consist of uppercase and lowercase English letters
    // - A substring is a CONTIGUOUS non-empty sequence of characters within a string.
// E: 
    // - Return empty string if substring does not exist in string 's' (ex. s = "a", t = "aa" -- has no dupe from t)
    // - Return string s for a string of length 1

// =============================================
//             Clarifying Questions
// =============================================
// Chars can be upper and lowercase. Should the solution behave in case-sensitive manner?

// Time Complexity O(n)

var minWindow = function(s, t) {
  // Set up a way to store the minSubStr 
  let minSubstring = ''; 

  // Make a copy of t for removing found elements
  let tCopy = Array.from(t.split(''));

  // Track current substring 
  let current = '';

  // Start building up substrings
  for (var i = 0; i <= s.length; i++) {

      // If we have encountered every letter in 't' including dupes, we have found a valid substring
      if (!tCopy.length) {
          // if ss length < minSubstring length, overwrite minSubstring with new value 
          if ((minSubstring.length > 0 && current.length < minSubstring.length) || minSubstring.length === 0) {
              // clear current substring var (reset to empty str "")
              minSubstring = current;
              current = '';
              tCopy = Array.from(t.split('')); // inefficient? Could be a function 'resetTCopy' ?
              // else continue searching for smaller substrings
          } 
      
      } else if (tCopy.includes(s[i])) {
          // If ith char found in t add it to substring and pop off t copy
          current += s[i];
          delete tCopy.splice(tCopy.indexOf(s[i]), 1);

      } else if (!tCopy.includes(s[i]) && current.length > 0) {
          // Else if not found in t but at least one t char previously found, add char to ss
          current += s[i];
      } else {
          continue;
      }
  }

  // Return minSubstring
  return minSubstring;
};

if (!module) {
    let module = {};
} 
module.exports = minWindow;