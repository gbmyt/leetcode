// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// =============================================
//           	     OICE
// =============================================
// O: Head of modified list
// I: Head of a linked list, int n representing node in the list to remove 
// C: 
    // The number of nodes in the list is sz
    // 0 <= Node.val <= 100
    // 1 <= n <= sz
// E: There is no nth node in the list, a list with only one node

// =============================================
//             Clarifying Questions
// =============================================
// Time complexity goal?
// Edge Case handling 
    // Return unmodified list if there is no nth node in the list
    // Wrong Input Type (not a linked list (?)) 
    // Single node list
        // where n = 1, return an empty node? or a new ListNode with no value?
        // where n != 1, return head of unmodified list
var removeNthFromEnd = function(head, n) {
    // Return empty ListNode if wrong input type
    if (typeof head !== 'object') return null;
    if (!head.next && n === 1) return null;

    // otherwise, set up current/prev vars for traversing the linked list and a count var (1) for tracking index
    let current = head;
    let count = 1;

    // Find list end
    let lastNode;
    while (current.next) {
        // if current.next is null (found end of list)
        if (!current.next.next) {
            lastNode = current.next;
            lastNode.prev = current;
            break;
        } else { // else if more nodes in list
            current.next.prev = current; // keep traversing the list forwards
            current = current.next;
        }
    }

    // Delete nth node
    current = lastNode;
    while (count <= n) {
        if (count === n) { // delete the target node
            if (!current.prev) {
              current.prev.next = current.next;
            } else {
              head = head.next;
            }
            break;
        } else { // else keep traversing the list backwards
            current = current.prev;
            count +=1;    
        }
    }
    
    // return head node of the modified list
    return head;
};

if (!module) {
  let module = {};
}
module.exports = { removeNthFromEnd, ListNode };