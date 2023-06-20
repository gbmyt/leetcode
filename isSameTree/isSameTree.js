/**
 * Definition for a binary tree node.
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}

var isSameTree = function(p, q) {
  // Base Cases
  if (!p && !q) return true;
  if ((!p || !q) || (p.val !== q.val)) return false;

  // Recursive Case
  if (isSameTree(p.left, q.left) && isSameTree(p.right, q.right)) {
      return true;
  } else {
      return false;
  }

};

// Export Logic 
if (!module) {
  module = {};
  }
module.exports = { TreeNode, isSameTree };