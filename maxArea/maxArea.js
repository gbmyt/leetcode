/**
 * @param {number[]} height
 * @return {number}
 */

// =============================================
//           					OICE
// =============================================
// O: Maxiumum amount of water a container a container can store
// I: Array of ints, int n representing vertical lines 
// C: Container cannot be slanted, n === array length, n will always be greater than or eq to 2
// E: 
  // - Array with only 2 values (both 1, [1, 1])
  // - Vertical lines that are not at the respective beginning and end of the array (requires backtracking?)

// =============================================
//        Questions to Ask an Interviewer:
// =============================================
// Is it safe to assume that I'm being asked to calculate the area of the largest container (L x W), where L is the height of the ith line and W is the distance from the 1st vertical line to the 2nd?
// Should I aim for a specific time/space complexity-- or is it ok to begin with a brute force solution?
// Since we are searching for the largest container, is it safe to assume all integers will be positive?

// Calculate the area of the largest possible (non-slanted container)
// Look for the 2 tallest lines that are as far apart as possible
// To get distance between two lines, subtract their indices from each other
// If the lines do not have the same height, choose the smaller one (since the container cannot slant)
// Track current maxVolume, height, width, L & R (line 1 and line 2)
 
// =============================================
//         NeetCode Brute Force Solution
// =============================================
// var maxArea = function(height) {
//   let maxArea = 0;

//   for (var l = 0; l < height.length; l++) {
//     for (var r = l + 1; r < height.length; r++) {
//       let area = (r - l) * Math.min(height[l], height[r]);
//       maxArea = Math.max(maxArea, area);
//     }  
//   }

//   return maxArea;
// };


// =============================================
//            Optimal Solution Pseudo:
// =============================================
// Initialize L and R pointers and set them to the beginning and end of the input array
// While there are more indices to check
  // Calculate the area of those two pointers by multiplying distance between them (right index - left index) and the min value of those two array elements
  // If the pointer values are the same, compare the next potential values (inputArray[l + 1], and inputArray[r - 1]) and increment the pointer whose next value will be greater.
  // Otherwise, update the pointer whose value is smaller
  // Recalculate the area based on the two new pointer values
  // If the new area is greater than the current maxArea, update it.
  // Otherwise, ignore the current area and continue incrementing the smallest pointer. 

// =============================================
//           		NeetCode Optimal Solution
// =============================================
// Time Complexity: O(n)
// Space Complexity: O(n)

var maxArea = function(height) {
  let maxArea = 0;
  let l = 0;
  let r = height.length - 1;

  // Check each element in the input array
  while (l < r) {
    let area = (r - l) * Math.min(height[l], height[r]);
    maxArea = Math.max(maxArea, area);

    if (height[l] < height[r]) {
      l += 1;
    } else {
      r -= 1;
    }
  }

  return maxArea;
};

// =============================================
//                  My Pseudo:
// =============================================
// Begin by sorting the array (don't modify the original because we need to keep track of line indices for our area calculation)
// While there are more vertical lines to check
    // Get the two largest values from sorted array. These are our initial lines 1 & 2 (we can ignore values smaller than 1 unless there is only one value > 1)
    // Get the indices of the two selected values and calculate distance (subtract greater index from smaller) 
    // Calculate area by multiplying the smaller line value * distance. 
    // Get the next tallest line and calculate the distance from lines 1 and 2. Use that to calc container area. If greater than maxVolume, update the variable. Do this until there are no more vertical lines to check.

// Time Complexity: O(n**2) ?
// Space Complexity: At least O(n), possibly O(n**2) depending on lib sort implementation

// =============================================
//           		My Solution (Incomplete)
// =============================================
// var maxArea = function(height) {
//   sortedHeights = height.slice().sort();

//   let n = 1;
//   let leftVal = sortedHeights[height.length - (n + 1)];
//   let rightVal = sortedHeights[height.length - n];
//   console.log('l val', leftVal, 'r val', rightVal);

//   // DEBUG TODO: Because the values are both 8, indexOf returns 1 as the index for both left and right
//   let leftIndex = height.indexOf(leftVal);
//   let rightIndex = height.indexOf(rightVal);
//   console.log('height arr', height, '\nl index', leftIndex, 'r index', rightIndex);

//   let lineHeight = Math.min(height[leftIndex], height[rightIndex]);
//   let distance = rightIndex - leftIndex;
//   let maxArea = distance * lineHeight;

//   // while there are more indices to check, update left and/or right pointers, and all associated calculations in order to get the next maxArea. If it is greater than the curent maxArea, update the variable. Otherwise, ignore it and keep oging.
//   return maxArea;
// };

// Export Logic 
if (!module) {
  module = {};
}
module.exports = maxArea;