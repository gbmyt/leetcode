/**
 * @param {number[]} nums
 * @return {number}
 */

// Leetcode: https://leetcode.com/problems/longest-consecutive-sequence/
// NeetCode Solution Video: https://bit.ly/3CACoLc

// Time Complexity: O(n) 
// Space Complexity: 

// =============================================
//           		    Today I: 
// =============================================
// Got some practice using the Set data structure and strengthened my mental model around use cases for it
// Learned an interesting strategy for determining whether a number in a set is the beginning of consecutive sequence or not
// Learned about the difference in time complexity of Array.prototype.includes() and Set.has()-- Set.has() has a time complexity of O(1) while Array.prototype.includes() has a time complexity of O(n)


// Learn More: 
// - Set.has() vs Array.includes() Time Complexity: https://www.tech-hour.com/javascript-performance-and-optimization

// =============================================
//           					OICE
// =============================================
// O: Length of the longest consecutive elements sequence
// I: Unsorted array of integers
// C: O(n) runtime, allow negative numbers
// E: Array of length 1

// =============================================
//                Allowances:
// =============================================

// Keep track of multiple sequences, because we need to find the *longest* one
// For each element check if the value +/- 1 is in the Set already. If so increment current sequence

// =============================================
//                  Pseudo:
// =============================================
// Given an array of ints
// Convert it to a Set
// Set up a way to track the current longest sequence found
// For each number in the Set 
  // Determine if it is the beginning of a sequence
  // If it is, initialize current sequence length to 1
  // If n + 1 in the Set increment sequence
// Compare sequence lengths and return the max (longest)

// =============================================
//             Neetcode Solution:
// =============================================
var longestConsecutive = function(nums) {
  let numSet = new Set(nums);
  let longest = 0;

  nums.forEach(n => {
    // Check if n is start of sequence
    if (!numSet.has(n - 1)) {
      let length = 0;
      while (numSet.has(n + length)) {
        length += 1;
      }
      longest = Math.max(length, longest);
    }
  })

  return longest;
};

// Export Logic 
if (!module) {
  module = {};
  }
module.exports = longestConsecutive;