// Leetcode: https://leetcode.com/problems/climbing-stairs/
// Neetcode Solution Video: https://www.youtube.com/watch?v=Y0lT9Fck7qI

// Time Complexity: O(n)

// =============================================
//           		Today I Learned: 
// =============================================
// Reinforced my mental models around memoizations and dynamic programming in Javascript

// Learn more: 
// - Memoization: https://bit.ly/46e38P8
// - Dynamic Programming for Beginners: https://bit.ly/3pdqVOD

/**
 * @param {number} n
 * @return {number}
 */

// =============================================
//           					OICE
// =============================================
// O: How many combinations of steps lead to the top of the staircase?
// I: Int n reprsenting steps in the staircase
// C: 
// E: 


// =============================================
//                  Pseudo:
// =============================================
var climbStairs = function(n) {
  if (n <= 0) return 0;

  let one = 1;
  let two = 1;
  let temp;

  for (var i = 0; i < n - 1; i++) {
    temp = one;
    one = one + two;
    two = temp;
  }
  console.log('res', one);
  return one;
};


// Export Logic 
if (!module) {
  module = {};
  }
module.exports = climbStairs;