/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// =============================================
//           					OICE
// =============================================
// O: Length of the longest substring containing the same letter you can get after performing specified operations
// I: string s and an integer k
// C: 
    // You can perform this operation at most k times. 
    // s consists of only uppercase English letters.
    // k will always be between 0 and s.length
    // 1 <= s.length <= 105
// E: 

// =============================================
//             Clarifying Questions
// =============================================
// "At most k times" meaning you can do it fewer than k times? Or you must do it k times?
// Any other uppercase English character in the alphabet, or only any other char in string 's'?
// Shoot for a specific time complexity? Or ok to start with a BF solution?
// If I choose to swap a letter, is replacing the char with itself disallowed? (can't replace 'A', with 'A')?
// How should I handle edge cases? (provide a few examples)
    // String of length 2 that already have the same letters (return s length for k of 2, 1 for k of 1) 
    // String < 2 letters but all are the same letter (see swap char with itself question)
    // Return 0 for a k of 0 (constraints say k can be 0, but we're looking for the longest substring that has the letter we got from swapping. If we can't swap at least once, we must return 0)

// Questions for Self:
// What condition triggers incrementing left/right pointer?
// How to guarantee this iterative solution doesn't just find A substring but the LONGEST substring

// Strategy:
// Need to choose both which letter to replace chosen char with AND the index (or indices) at which to swap the letters out
// We probably want to choose another letter that already exists in the input string since we're trying to generate longest possible substring

// Figure out which substring is the longest and is currently only broken up by k or fewer different letters in between
    // First figure out distance between chars in substring
    // Then choose which char to replace and with which letter
// Don't actually need to perform the swap, just isolate the longest substring and return its length

// =============================================
//             My Solution (Broken)
// =============================================

// =============================================
//                  Pseudo
// =============================================
// If k is 0, return k

// For letter in input string
// Keep track of distance between chars, and char counts
// Get me two pointers, @ start and end

// If array(left + 1) is same as array(left) 
    // If  array(right - 1) is same as array(right) 
        // do nothing
    // Else increment distance and char counts
// Else increment distance and char counts

// if distance > k 
    // if next char is target letter
        // move pointer (if left, left + 1, else if right, right - 1) 
        // reset distance to 0
        // reset diff letter count to 0
    // else if next letter not target
        // continue loop until target letter found, set pointer to that index
var characterReplacement = function(s, k) {
  if (k === 0) return 0;
  // todo
};

if (!module) {
  let module = {};
}
module.exports = characterReplacement;