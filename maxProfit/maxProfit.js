/**
 * @param {number[]} prices
 * @return {number}
 */
// =============================================
//           					OICE
// =============================================
// O: Maximum possible profit (int) or 0
// I: Array of prices representing stock prices on a given day (prices[i] stores the price on the i-th day)
// C: 
    // - You can't sell stock on a day prior to the day you choose to buy (if you buy on day 2, you cannot sell on day 1)
    // - Array indices wont map to days exactly (day is i + 1 (index 0 will represent price on day 1, and so on))

// Allowances: Prices array will always have 1 or more elements in it
// E: Return 0 if: No possible profit can be made, stock price never changes, prices array of length 1

// =============================================
//                  Pseudo:
// =============================================
// Given an array of stock prices 
// Check each price in the array to find the smallest
// If the smallest price (min) is not located at the end of the array, check the remaining array elements to find the largest of them (max)
// subtract min from max or 0 if the result is negative / min is at end of array

// =============================================
//           		Neetcode Solution
// =============================================
var maxProfit = function(prices) {
  let l = 0;
  let r = 1;
  let maxP = 0;

  while (r < prices.length) {
    let profit;
    if (prices[l] < prices[r]) {
      profit = prices[r] - prices[l];
      maxP = Math.max(maxP, profit);
    } else {
      l = r;
    } 
    r++;
  }
  return maxP;
}
// =============================================
//           	My Solution (buggy)
// =============================================
// var maxProfit = function(prices) {
//   let min = prices[0];
//   let max = 0;
//   let buyDay;
//   let sellDay;
  
//   if (prices.length <= 1) return 0;

//   for (var i = 0; i < prices.length; i++) {
//       if (prices[i] < min && i < prices.length - 1) {
//           min = prices[i]
//           buyDay = i + 1;
//       } else if (prices[i] >= max) {
//           console.log('true', max, 'min index', prices.indexOf(min));
//           if (i > prices.indexOf(min)) {
//               max = prices[i]
//               sellDay = i + 1;
//           }
//       }
//   }
//     console.log('min', min, 'max', max);
//   return max - min >= 1 ? max - min : 0;
// };

// Export Logic 
if (!module) {
  module = {};
}
module.exports = maxProfit;