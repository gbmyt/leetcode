
/**
 * @param {number[]} nums
 * @return {number}
 */

// Leetcode: https://leetcode.com/problems/find-the-duplicate-number
// Linked In Post from which I got this: https://bit.ly/43xpQjF

// Time Complexity: O(n) 
// Space Complexity: O(1)

// =============================================
//           		Today I Learned: 
// =============================================
// About negation marking and how this technique can be used to solve the find Duplicate problem while achieving space complexity of O(1) 


// Some notes from the post author:
// In order to solve it without creating another data structure (which would cause O(n) space complexity) we'll utilize a cool concept I just learned called negation marking! Essentially, every time we visit an element in the array, we're going to mark the number as "negative" indicating that it has been "visited". If we run into that number again, it will already have been marked negative and thus we can return True, otherwise False.

// =============================================
//                  My Notes
// =============================================
// At first I had a hard time grokking this, but then I realized that what the solution really does is visit each element of the input array and based on that number, goes ahead and finds whatever value is at index - 1. If that number is positive it updates it to a negative value. 

// I couldn't understand why this was relevant to finding dupe values until I realized that visiting a duplicate number would cause a revisit to the previously marked negative number (absolute value of 3 - 1 will always take you to index of 2. It doesn't matter what is stored there because if it's negative, you already visited that index before. This **DOES** assume a constraint imposed on the input array to disallow negative numbers.)
 
var findDuplicate = function(nums) {
  if (nums.length <= 1) return 0;

  for (const [i, num] of nums.entries()) {
   const abs = Math.abs(num);
   
   // if it's already negative return it
   if (nums[abs - 1] < 0) {
     return Math.abs(num)
   };
 
   // Otherwise, mark it negative
   nums[abs - 1] *= -1;
  }

  // Return 0 if no duplicate was found
  return 0;
 };

 if (!module) {
  module = {};
}
module.exports = findDuplicate;