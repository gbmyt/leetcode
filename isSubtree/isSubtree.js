/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
// =============================================
//           					OICE
// =============================================
// O: Bool representing whether there is a subroot of 'root' with same struct and node vals of 'subRoot'
// I: Root of 2 binary trees
// C: 
// E: 

// =============================================
//             Clarifying Questions
// =============================================


// =============================================
//             NeetCode Solution
// =============================================
// Time Complexity: O(S * T) 

var isSubtree = function(root, subRoot) {
  if (!root) return false

  if (isSame(root, subRoot)) return true

  const hasLeftTree = isSubtree(root.left, subRoot)
  const hasRightTree = isSubtree(root.right, subRoot)

  return hasLeftTree || hasRightTree
};

const isSame = (root, subRoot) => {
  const hasReachedEnd = !(root && subRoot)
  if (hasReachedEnd) return root === subRoot

  const isMismatch = root.val !== subRoot.val
  if (isMismatch) return false

  const isLeftSame = isSame(root.left, subRoot.left)
  const isRightSame = isSame(root.right, subRoot.right)

  return isLeftSame && isRightSame
}

// =============================================
//              My Solution (Broken)
// =============================================

// =============================================
//                  Pseudo:
// =============================================
// Get node from each tree
// If values equal, get next node of both trees
// Else get next node of tree only 
// Keep doing this until end of either or both trees found (next node is null)
// If end of both trees found, return true
// Otherwise no match found, return false (if more nodes in tree, struct isn't the same. If more nodes in subtree, match not found)
// var isSubtree = function(root, subRoot) {
//   let l = root;
//   let r = subRoot;
//   let direction = 'left';

//   while (l[direction]) {

//       if ((!l.direction && r.direction) || (l.direction && !r.direction)) {
//           return false;
//       } else if (l.val === r.val) { // if matched nodes, increment both tree nodes
//           console.log('Matched', l.val, r.val);
//           l = l[direction];
//           r = r[direction];
//           direction = direction === 'left' ? 'right' : 'left' ;
//       } else if (l.val !== r.val)  { // if no match, increment left tree only 
//           console.log('No match', l.val, r.val);
//           l = l[direction];
//           direction = direction === 'left' ? 'right' : 'left' ;
//       }

//   }
//   return true;
// };

if (!module) {
  let module = {};
} 
module.exports = { isSubtree, TreeNode };