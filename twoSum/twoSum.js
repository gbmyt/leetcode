// Leetcode: https://leetcode.com/problems/two-sum
// Solution Video: https://www.youtube.com/watch?v=KLlXCFG5TnA

// Time Complexity: O(n**2)

// =============================================
//           		Today I Learned: 
// =============================================
// Reinforced my understanding of how hash maps (and hash tables) work, and how they could be used to optimize a solution for the twoSum problem. 

// This reduces time complexity from O(n^2) to O(n) though there is a memory tradeoff.

// Learn more about it here: https://www.youtube.com/watch?v=F95z5Wxd9ks

// =============================================
//           					OICE
// =============================================
// O: Array of indices representing 2 array integers that sum up to the "target"
// I: Array of integers, int 'target'
// C: Assumes 1 valid solution, may not use the same element twice, return the answer in any order
// E: 
    // - Array of length 1
    // - Empty array 
    // Non-array type input
    // Array of non-integer type elements
    // Array with no valid solution (there are no integers in the array that sum up to the "target")

// Strategy: 
// 2 loops to iterate over array elements 
    // 1st to grab each elem
    // 2nd to compare sums across remaining array ints

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
    var twoSum = function(nums, target) {
      let current;
  
      for (var i = 0; i < nums.length; i++) {
        current = nums[i];
        
        for (var j = 1; j < nums.length; j++) {
          if (current + nums[j] === target && (i !== j)) {
              return [i, j];
          }
        }
  
      }
  
      return []
  };

// Export Logic 
if (!module) {
  module = {};
}
module.exports = twoSum;