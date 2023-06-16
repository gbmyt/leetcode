// Leetcode: https://leetcode.com/problems/missing-number
// Solution Video: https://bit.ly/3NbOGi2

// Time Complexity: O(n)
// Space Complexity: O(1)

// =============================================
//           		Today I Learned:
// =============================================
// About the bitwise XOR operator and how it works
// About the difference in performance between loops and higher order functions

/**
 * @param {number[]} nums
 * @return {number}
 */

// =============================================
//           					OICE
// =============================================
// O: The only number in the range that is missing from the array
// I: Array of integers
// C: 
    // n is the array length ( so the range will be from 0 to n -- for example in an array of 3 items, the range will be 0 to 3)
    // nums[i] will always be between 0 and n (inclusive)
    // Range will always start with 0 
    // There will always be exactly 1 missing number from the range
// E: Non array input type, non int type elements

// =============================================
//                  Pseudo:
// =============================================
// Strategy 1 : Generate the expected range and the iteratively compare input against the new range.
    // Disadvantage: Increased Space Complexity due to creating a storage array or hashmap

// Strategy 2 : Sort the array before iterating over elements, check for a difference of +/- 1 for each consecutive int in the array. An element with a difference of more than 1 indicates you've located the spot in the missing array. You should confirm the difference between the current and next element is 2, otherwise you've sorted the array incorrectly or have encountered an edge case (such as missing more than 1 number in the array)
    // Disadvantage: Increased time complexity due to having to sort the array before looping

// =============================================
//           	Neetcode Solution
// =============================================
var missingNumber = function(nums) {
  let res = nums.length;

  if (!Array.isArray(nums) || nums.length === 0) return 0;

  for (var i = 0; i < nums.length; i++) {
    res += (i - nums[i]) 
  }

  return res;
};

// =============================================
//           	  Naive Solution
// =============================================
// var missingNumber = function(nums) {
//   for (var i = 0; i <= nums.length; i++) {
//     if (!nums.includes(i)) return i;
//   }
// };

// Export Logic 
if (!module) {
module = {};
}
module.exports = missingNumber;