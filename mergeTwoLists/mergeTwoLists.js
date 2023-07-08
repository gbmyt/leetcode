/**
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */


// Definition for singly-linked list node.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

// Definition for singly-linked list.
class LinkedList {
    constructor()
    {
        this.head = null;
        this.size = 0;
    }
 
    // functions to be implemented
    // add(element)
    // insertAt(element, location)
    // removeFrom(location)
    // removeElement(element)
 
    // Helper Methods
    // isEmpty
    // size_Of_List
    // PrintList
}

// Time Complexity: 
// Space Complexity: 

// =============================================
//           					OICE
// =============================================
// O: Head of the merged linked list
// I: Head of 2 sorted linked lists
// C: 
    // - The (merged) list should be made by splicing together the nodes of the first two lists.
    // - The number of nodes in both lists is in the range [0, 50].
    // - -100 <= Node.val <= 100
    // - Both list1 and list2 are sorted in ascending order.
// E: 

// =============================================
//            Interviewer Questions:
// =============================================
// If two nodes from different lists have the same value, does it matter in what order I add them to the new sorted list?
// Not sure if I would want to ask for clarification on the meaning of 'splice' in this context? Does this refer to the dictionary definition of the word (join or connect (a rope or ropes) by interweaving the strands), or the Javascript method .splice() ? 
// If I can assume the lists are sorted in ascending order, do I need to complete the merge before returning the new list head? Once I address the first 1-2 sets of nodes from each list theoretically I could already go ahead (ha) and return the new list head node. BUT the question description does appear to expect the merge to be completed prior to returning the new head node.
// Will the two lists always have the same number of nodes?
// Do I need to implement a Linked List class myself, and then convert the input arrays to LLs?

// =============================================
//                  Pseudo:
// =============================================
// Create a container for storing the new merged list in
// If the lists each have no nodes, return an empy merged list, ex. []
// If only one list has a node, return a new list with the single node in it, ex. [0]
// While L1 node is not tail AND L2 node is not tail
    // Get the head of the two lists and compare them.
    // If they have the same value, remove L1's node and 
        // Update L1's head to old head's next node
        // If result list already has length, point the current tail's next val to this new node and move tail over to this node 
        // Otherwise add the removed node as both head and tail to the new/result list
    // Else if L1 head val gt L2 head val 
        // Remove it 
        // Update L1's head to old head's next node
        // If result list already has length, point the current tail's next val to this new node and move tail over to this node 
        // Otherwise add the removed node as both head and tail to the new/result list
    // Else  if L2 head val gt L1 head val 
        // Remove it 
        // Update L2's head to head's next node
        // If result list already has length, point the current tail's next val to this new node and move tail over to this node 
        // Otherwise add the removed node as both head and tail to the new/result list
// Return the head of the new merged list 
var mergeTwoLists = function(list1, list2) {
  // Create a container for storing the new merged list in
  let merged = new ListNode([], null);;
  let l;
  let r;
  let node;

  // If the lists each have no nodes, return an empy merged list, ex. []
  if (list1.val === undefined && list2.val === undefined) {
      merged = new ListNode([], null);
      return merged;
  }

  // If only one list has a node, return a new list with the single node in it, ex. [0]
  if (list1.val === 0 && list2.val === undefined || list1.val === undefined && list2.val === 0) {
      merged = new ListNode([0], null);
      return merged;
  }

  // While L1 node is not tail AND L2 node is not tail
  while (list1.next !== null || list2.next !== null) {

      // Get list nodes and compare them.
      lNode = list1.val;
      rNode = list2.val;
      
      // If they have the same value
      if (lNode === rNode) {
          // Remove L1's node and update L1's head to old head's next node
          node = new ListNode(list1.val, null);

          // If merged list already has length point the current tail's next val to new node
          if (merged.val !== null && merged.val !== undefined && merged.val !== 0) { 
              merged.next = node;
          } else {
              merged = (node);
          }
      } else if (lNode <= rNode) {
          // Else if L1 head val gt L2 head val 
              // Remove it 
              // Update L1's head to old head's next node
              // If result list already has length, point the current tail's next val to this new node and move tail over to this node 
              // Otherwise add the removed node as both head and tail to the new/result list
          // Remove L1's node and update L1's head to old head's next node
          node = list2.val;
          list2 = list2.next;
          merged.push(node);

          // If merged list already has length point the current tail's next val to new node
          if (merged.val !== null && merged.val !== undefined && merged.val !== 0) { 
              merged.next = node;
          }
      }

      if (list2.next === null) {
          lNode = lNode.next;
          rNode = lNode.next.next;
      } else if (list1.next === null) {
          rNode = rNode.next;
          rNode = rNode.next.next;
      } else {
          lNode = lNode.next;
          rNode = rNode.next;
      }
  }

  // Return the head of the new merged list 
  return merged;
};

// Export Logic 
if (!module) {
  module = {};
}
module.exports = { ListNode, mergeTwoLists };