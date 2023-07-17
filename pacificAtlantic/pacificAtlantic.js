/**
 * @param {number[][]} heights
 * @return {number[][]}
 */

// =============================================
//           	     OICE
// =============================================
// O: A 2D list of grid coordinates 'result' 
    // where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to BOTH the Pacific AND Atlantic oceans.
// I: An m x n integer matrix heights 
    // where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).
// C: 
    // m == heights.length ( m eq col count )
    // n == heights[r].length ( n eq row count )
    // 1 <= m, n <= 200 (board will always be between sizes 1 and 200)
    // 0 <= heights[r][c] <= 105 (no more than 105 cells on board)
// E: 
    // Single cell board (water can flow from the only cell into both oceans)
    // An m x n board where there are no paths to both, or either oceans (cells around the border are ALL gt the inner cell heights)
    // Wrong input type

// =============================================
//             Clarifying Questions
// =============================================
// Target Time Complexity clarification 


// =============================================
//             My Solution (broken)
// =============================================
// =============================================
//                  Pseudo:
// Backtracking algorithm -- first check cell to left, then if that works keep checking adjacent cells. 
// Else, come back to current cell and check to the right/up/down and continue till valid path is found
// Add valid path to list of results

// Conditions to add path to results
    // Water can flow to both the Pacific and Atlantic oceans from 'start' cell (heights[r][c])
        // Water must be able to flow from path start cell into adjacent cells (NSEW) continuously until ocean reached
            // To flow into the next cell, adj cell height must be lt or eq to the current cell height/value
// =============================================
// Get cell, set up path var for tracking path validity 

// ------------------------------
// validateCell(coord) Pseudo
// ------------------------------
// validateCell(current) 
    // If cell to left of current, check its height
        // if lt or eq to current, get next cell/keep checking 
    // Else, return to current cell 
        // if cell to right of current, check its height
        // Else if cell above
            // ...ditto
        // Else if cell below
            // ...ditto
    // Else, found an ocean
        // if no left or above cell, found pacific
            // note that valid path to pacific was found
        // else if no right or bottom cell, found atlantic
            // note that valid path to atlantic was found

// If current path valid
    // Add [cell coords] to list of results
// Else if path not valid
    // Get next starting cell coord and try again
// return results list
var pacificAtlantic = function(heights) {
  let results = [];

  // cols
  for (var colIndex = 0; colIndex <= heights.length; colIndex++) {
      
      // rows
      for (var rowIndex = 0; rowIndex <= heights[colIndex].length; rowIndex++) {
          
      }

  }

  const validateCell = (row, col, board) => {
      const cell = board[row][col];
      const up = board[row - 1][col];
      const down = board[row + 1][col];
      const left = board[row][col - 1];
      const right = board[row][col + 1];

      // path valid
      if (!right || !down) { 
          console.log('found atlantic');
          return { 'isValid': true, 'direction': null };
      } else if (!left || !up) { // left = (r, c - 1)
          console.log('found pacific');
          return { 'isValid': true, 'direction': null };
      }

      // compare cell heights 
      if (cell <= right) { // right = (r, c + 1)
          console.log('checking right');
          return { 'isValid': true, 'direction': right };
      } else if (cell <= left) { // left = (r, c - 1)
          console.log('checking left');
          return { 'isValid': true, 'direction': left };
      } else if (cell <= up) { // up = (r - 1, c)
          console.log('checking up');
          return { 'isValid': true, 'direction': up };
      } else if (cell <= down) { // down = (r + 1, c)
          console.log('checking down');
          return { 'isValid': true, 'direction': down };
      } else {
          console.log('Invalid cell coordinates. Please try again');
      }

      return { 'isValid': false, 'direction': null };
  };
  
  validateCell(0, 0, heights);
  return results;
};

if (!module) {
  let module = {};
}
module.exports = pacificAtlantic;