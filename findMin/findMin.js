/**
 * @param {number[]} nums
 * @return {number}
 */

// Time Complexity 
// Space Complexity 

// =============================================
//           		   OICE
// =============================================
// O: Minimum element in the rotated array
// I: Rotated sorted array of integers
// C: Solution must run in O(log n) time 
    // n == nums.length
    // 1 <= n <= 5000
    // -5000 <= nums[i] <= 5000
    // All the integers of nums are unique.
    // nums is sorted and rotated between 1 and n times.
// E: 

// =============================================
//             Clarifying Questions
// =============================================
// Clarify understanding of what a rotated array is (definition is provided for this example)

// Min element in a rotated array = arrLength - (arrLength - rotations)
// Need to determine:
    // Minimum Element: min = n - (n - r)
    // Array Length: n = nums.length
    // How to get array rotations?
// =============================================
//                  Pseudo:
// =============================================
// Determine rotation count
// Calculate minimum array element using rotation count and array length
// return min elem

// =============================================
//                 v2 Pseudo:
// =============================================
// Set up L/R Pointers (beginning/end of array)
// Track min in variable
// If L > R, save R and decrement it
// Else if L < R compare to min and return smallest
var findMin = function(arr) {

  if (!arr.length || !Array.isArray(arr)) return 0;

  if (arr.length <= 1) {
    return arr[0];
  }

  let min;
  let l = 0;
  let r = arr.length - 1;
  
  for (var i = 0; i < arr.length; i++) {
      if (arr[l] > arr[r]) {
          min = min === undefined ? arr[r] : Math.min(arr[r], min) 
          r -= 1;
        } else if (arr[l] < arr[r]) {
          min = min === undefined ? arr[l] : Math.min(arr[l], min)
      }
  }
  return min;
};

if (!module) {
  let module = {};
}
module.exports = findMin;