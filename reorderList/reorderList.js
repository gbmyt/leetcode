// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
*/

// =============================================
//           					OICE
// =============================================
// O: Reordered list 
// I: Head of a singly linked list
// C: You may not modify the values in the list's nodes. Only nodes themselves may be changed.
// E: 

// =============================================
//            Interviewer Questions
// =============================================
// Safe to assume valid inputs? i.e. input list will always have 3+ nodes? 
// If no, how to handle an emtpy list (return false, [], 0, etc)
// Ok to work with arrays that represent a linked list? Or should I go ahead and implement?
// Is there a particular time complexity to shoot for?
// Is it ok if I do some experimental logging to better understand the inputs I'm working with? 
    // (Doing this allowed me to find out that I can log Object.entries, that head is not an array, etc.  )

// =============================================
//                  Pseudo v1:
// This is a collection of ListNodes, can't use this strategy without additional manipulation
// =============================================
// If the original list is empty, return []
// If the original list has 1 node, return it unmodified
// If the original list has 2 nodes, return it unmodified

// Split the list in half (left, right)
// Reverse the right side 
// Nested for loops
// Start by adding left[0] to result and then alternate adding one node from each list after that
// Return the reordered list 

// =============================================
//                  Pseudo v2:
// =============================================
// Recursively traverse the list until last node found
// When max depth reached, should theoretically know list length. 
// Length/Depth can be used to halve the lists (tells us how many nodes from end of list need to be moved. In test case, 2)
// While nodesToMove is gt 0 (rearrange() helper func?)
    // Set current node.next to head.next
    // Set the current node in recursive call stack/current execution context to head.next
    // Decrement nodesToMove by 1
var reorderList = function(head) {
  let slow = head;
  let fast = head.next;

  // Find the center of the linked list by using 2 pointers to traverse the list at single and double rates
  // When the while loop exits the slow pointer should be at the center element
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the list
  let second = slow.next; // first elem of right half
  let prev = null;
  slow.next = null;
  let tmp;
  while (second) {
    tmp = second.next;
    second.next = prev;
    prev = second;
    second = tmp;
  }

  // Merge the two list halves
  let first = head;
  second = prev;
  let tmp1;
  let tmp2;
  while (second) {
    tmp1 = first.next;
    tmp2 = second.next;
    second.next = tmp1;
    first = tmp1;
    second = tmp2;
  }
};

// Export logic
if (!module) {
  module = {};
}
module.exports = { ListNode, reorderList};