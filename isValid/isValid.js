/**
 * @param {string} s
 * @return {boolean}
 */

// =============================================
//           	     OICE
// =============================================
// O: Boolean representing whether the input string was validated
// I: String (only contains brackets/parens)
// C:  
    // - nested parens are valid, ([]{})
    // - Open brackets must be closed in the correct order, [(]) isn't valid (?)
    // - Every close bracket has a corresponding open bracket of the same type.
    // - Open brackets must be closed by the same type of brackets.
// E: Empty string, a string with length 1

// =============================================
//                  Pseudo:
// =============================================
// Given a string containing only parentheses
// Initialize validated to false
// If string length is odd or 0, return false

// BC: Else if string is valid, return true

// RC: Else, validate string
    // For each character of the string, start a 'pair'
        // if index is -1, validate last pair and return validated (if last pair completed, return true)

        // else, if the char is a valid character (it is a paren)
        // check if the next char in string is the matching close paren
            // if so, finish the 'pair' and continue to loop (i + 2 to skip the closing bracket if close bracket was found, otherwise i + 1)

        // otherwise, recursively call isValid() on the remainder of the string
var isValid = function(s, pair = '', substring = false) {

  let validated = false;
  let validPairs = ['()', '[]', '{}'];

  if (s.length === 0 || (s.length % 2 !== 0 && !substring)) return false;
  if (s.length === 2 && validPairs.includes(s)) return true;

  for (var i = 0; i < s.length;) {

      if (i >= s.length) { // exceeded end of string somehow 
          return validated;
      } else if (i === s.length - 2) { // at end of string
          validated = validPairs.includes(s[i] + s[i + 1]) ? true : false;
          break;
      } else if (validPairs.includes(s[i] + s[i + 1])) { // found pair 
          i = i + 2;
      } 
      
      if (pair.length === 1) { // reached the end of a nested string
        if (i === s.length - 1) {
          return validPairs.includes(pair + s[i]) ? true : false;
        } else {
          i++;
        }
      } else { // validate nested parens ([])
        validated = isValid(s.slice(i + 1), s[i], true);
        // i = i + 1;
        break;
      }
  }

  return validated;
};
// Export Logic 
if (!module) {
  module = {};
}
module.exports = isValid;