/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// =============================================
//           		 OICE
// =============================================
// O: Array of arrays (each containing input string anagrams grouped together)
// I: Array of Strings
// C: Characters are lowercase
// E: Empty Array, Array with a single string (including empty string) -- wrap it in another array and return it


// =============================================
//                  Pseudo:
// =============================================
// Given an array of strings
// Get me a variable to record characters counts in and a result variable to store anagrams/results in

// Get the first string from the array and map letters -> counts in a Hash Map
// Then add hash map as key + string (in nested arr) as value to counts variable

// For each remaining string, compare their character counts to each key in the Hash Map
    // If match found, push string to array at that hash map key
    // Else create and add new hash map/array pair to counts 
// Return result (grouped anagrams array)

// =============================================
//            Neetcode Solution
// =============================================
var groupAnagrams = function(strs) {
  let res = {};
  const base = "a".charCodeAt(0);
  if (strs.length <= 1) return [strs]

  for (var s of strs) {
    let count = [];

    s.split('').forEach((c, index) => {
      let letter = s.charCodeAt(index);
      count[letter - base] = count[letter - base] + 1 || 1;
    }) 

    if (!res[count]) {
      res[count] = [s];
    } else {
      res[count].push(s);
    }

  }

  return Object.values(res);
};
        
// =============================================
//         My Solution (BROKEN/PARTIAL)
// =============================================
// var groupAnagrams = function(strs) {
//   // Store results in an array
//   let groupedAnagrams = [];
//   let charCounts = {};

//   // Get me the first word
//   for (var i = 0; i < strs.length; i++) {
//       let currentWord = strs[i];

//       // Check if it is in results array
//       let maps = Object.keys(charCounts)

//       for (var j = 0; j < currentWord.length; j++) {

//           for (var k = 0; k < maps.length; k++) {
//               if (maps[k].includes(currentWord[j])) {
//                   console.log(currentWord[j], maps[k])
//               } else {
//                   map = {};
//                   charCounts[map]
//               }
//           }

//       }

//       // If it isn't, count each letter and map counts to value in an object
//       // if (maps.includes()) {

//       // } else {

//       // }

//       // Get me the next word
//       // For each character of next word check if it is found in the object/map
//       // If it is, decrement count in the object
//       // Once the word length has been exhausted check if all char counts in obj are 0 and if so, add the word to existing array
//       // Otherwise, create a new map for it to Add to obj

//   }

//   // Add all arrays to a "result" array and return it
//   return groupedAnagrams;
// };

// Export Logic 
if (!module) {
  module = {};
}
module.exports = groupAnagrams;