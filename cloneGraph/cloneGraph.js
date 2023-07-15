// Definition for a Node.
function Node(val, neighbors) {
   this.val = val === undefined ? 0 : val;
   this.neighbors = neighbors === undefined ? [] : neighbors;
};

/**
 * @param {Node} node
 * @return {Node}
 */
// =============================================
//           	     OICE
// =============================================
// O: Deep copy (clone) of the graph
// I: Reference of a node in a connected undirected graph // adjList = [[2,4],[1,3],[2,4],[1,3]]
// C: 
    // The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.
    // The number of nodes in the graph is in the range [0, 100].
    // 1 <= Node.val <= 100
    // Node.val is unique for each node.
    // There are no repeated edges and no self-loops in the graph.
    // The Graph is connected and all nodes can be visited starting from the given node.
// E: 

// Notes:    
    // Each node's value is the same as the node's index (1-indexed).
    // The graph is represented in the test case using an adjacency list.
        // An adjacency list is a collection of unordered lists used to represent a finite graph. 
        // Each list describes the set of neighbors of a node in the graph.

// =============================================
//             Clarifying Questions
// =============================================
// Confirm deep copy and connected undirected graph definitions

// =============================================
//           	    NeetCode Solution
// =============================================
// Time Complexity: O(n)

// =============================================
//           	  My Solution (Broken)
// =============================================

// =============================================
//                  Pseudo:
// =============================================
// Create a clone node
// Use the node ref to walk the graph
// If node has neighbors
// Copy each neighbor node to clone as we walk the graph
// Return the clone
var cloneGraph = function(node) {
  let clone = {};

  const cloneNodes = (node) => {
      for (let key in node) {
          clone[key] = node[key]
      }

      for (let n of node.neighbors) {
          cloneNodes(n);
      }
  };
  cloneNodes(node);

 console.log('obj clone', clone);
 return clone;
};

if (!module) {
  let module = {};
}

module.exports = { cloneGraph, Node };