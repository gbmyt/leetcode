/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// Leetcode: https://leetcode.com/problems/top-k-frequent-elements/
// Solution Video: https://bit.ly/3qJv8d1

// Time Complexity: O(n * k) 
// Space Complexity: O(n^2)

// =============================================
//           		Today I Learned: 
// =============================================
// About using Jest's expect.arrayContaining() to check for a subarray containing some expected values. My use case was that I needed to check an array for some expected values that could be returned in any order. Let me know if you know a better/alternative ways to achieve this!

// Was reminded that Object.entries() is a great alternative to grabbing just the values or keys of an object. I find myself reaching Object.values(), Object.keys() quite often and was reminded while solving this problem that .entries() is a useful alternative when you want to grab each key + value at the same time. 

// Reminded myself of the key differences between for...in and for...of and their use cases (for-in provides access to the object keys , whereas the for-of operator provides access to the values of those keys.)

// Learn More: 
// expect.arrayContaining(): https://jestjs.io/docs/expect#expectarraycontainingarray
// Object.entries(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
// for...of: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// for...in: 

// =============================================
//           					OICE
// =============================================
// O: "k" most frequent elements
// I: Array of nums and an int "k"
// C: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
// Allowances/Assumptions:
    // - Return answer in any order
    // - "k" will never be less than 1
    // - Array ints can be negative
    // - It is guaranteed that the answer is unique.
    // - k is in the range [1, the number of unique elements in the array].
// E: An array of length 0 or 1, an array with no duplicate ints, an array of < k unique elements


// =============================================
//                  Pseudo:
// =============================================
// Given an array of numbers to search and an integer k, return the "k" most frequently occuring elements in the input array
// for an array of 1 return the input array
// for an array of k elements with no duplicates return the input array

// Create a hash map to store counts in
// Iterate over the loop incrementing HM as needed 
// Return object.values from 0 through k - 1


// =============================================
//              Neetcode Solution
//    Time & Space Complexity: both O(n) 
//          Bucket Sort Strategy
// =============================================
var topKFrequent = function(nums, k) {
  let counts = {};
  let freq = Array.from({ length: nums.length + 1}, (x, i) => 0);
  
  for (var n of nums) {
    counts[n] = counts[n] + 1 || 1;
  }
  for (const [key, value] of Object.entries(counts)) {
    if (Array.isArray(freq[value])) {
      freq[value].push(key);
    } else {
      freq[value] = [key];
    }
  }

  let res = [];
  for (var i = freq.length - 1; i > 0; i--) {
    if ( Array.isArray(freq[i]) ) {
      freq[i].forEach((n, i) => {
        res.push(parseInt(n));
      })

      if (res.length === k) return res;
    }
  }

};

// =============================================
//                 My Solution
// =============================================
// var topKFrequent = function(nums, k) {
//   if (nums.length <= 1) return nums;

//   let counts = {};
//   for (var n of nums) {
//       counts[n] = counts[n] + 1 || 1;
//   }

//   let countKeys = Object.keys(counts);
//   let sorted = [];

//   // convert key/value pairs to tuples for sorting
//   countKeys.forEach(key => {
//     sorted.push([parseInt(key), counts[key]]);
//   })

//   // sort keys by value
//   sorted.sort(function(a, b) {
//     return b[1] - a[1];
//   });

//   // Return top K elements from the sorted array
//   return sorted.map(item => item[0]).slice(0, k);
// };

// Export Logic 
if (!module) {
  module = {};
}
module.exports = topKFrequent;