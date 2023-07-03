/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Time Complexity: O(n**2)
// Space Complexity: O(n), depends on sort implementation

// =============================================
//           					OICE
// =============================================
// O: Array of arrays representing triplet sets that sum to zero
// I: Array of ints
// C: Indices can be reused in different result sets, but not in the same triplet set
// E: Input Array has length 3. Return empty result array for an input that has no triplets summing to zero

// =============================================
//                 (My) Pseudo:
// =============================================
// Set up result and currentSet array vars to track the current set we're working on 
// Generate all possible combinations of 3 ints from input array and add them to a hash map
    // While there are more combos to generate (Need to figure out an exit condition for this)
        // Loop over the input array
        // While the currentSet length is < 3, add each consecutive index to currentSet array (need a condish for skipping indices)
        // If the set doesn't already exist in the hash map, add it 
        // When there are no more possible combos of ints, exit the while loop 
// For each set in has map, if sums to zero AND not already in the result array, add it
// Return result array


// =============================================
//           		NeetCode Solution
// =============================================
// Left and Right Pointer strategy for tracking which values are currently being summed
// If the sum is less than or greater than zero, increment/decrement l/r pointers respectively to fetch the next value in the curret triplicate set
// Skip duplicate values by checking if they already exist in our set, skip if so
var threeSum = function(nums) {
    let res = [];
    nums = nums.sort();

    for (let i = 0; i < nums.length; i++) {
      // val is the current item of the array
      let val = nums[i]; 

      if (i > 0 && val === nums[i - 1]) {
        // Skip duplicates in the array
        continue;

      } else {
        // Set up left and right pointers
        let l = i + 1;
        let r = nums.length - 1;

        while (l < r) {
          // sum our three values
          let threeSum = val + nums[l] + nums[r];

          if (threeSum > 0) {
            // if we've exceeded zero, decrement right pointer
            r -= 1;
          } else if (threeSum < 0) {
            // if we haven't yet summed to zero, increment left pointer
            l += 1;
          } else {
            // Add triplicate set to result array and increment left pointer to begin a new set
            res.push([val, nums[l], nums[r]]);
            l += 1;

            // Skip duplicate elems in the array
            while (nums[l] === nums[l - 1] && l < r) {
              l += 1;
            }
          }
        }
      }
    }

    // Return result array
    return res;
};

// Export Logic 
if (!module) {
  module = {};
}
module.exports = threeSum;