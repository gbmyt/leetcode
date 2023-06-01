// Leetcode: https://leetcode.com/problems/reverse-linked-list/
// Solution Video: https://youtu.be/W1BLGgWZhK8

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseLinkedList = function(head) {
    let new_list = null;
    let next_node;
    let current = head;
    while (current) {
        next_node = current.next;
        current.next = new_list;
        new_list = current;
        current = next_node;
    }
    return new_list;
};

// Export Logic 
if (!module) {
  module = {};
}
module.exports = reverseLinkedList;