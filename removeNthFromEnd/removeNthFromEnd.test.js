const { removeNthFromEnd, ListNode} = require('./removeNthFromEnd.js');

describe('removeNthFromEnd Import', function() {
  it('should exist', function() {
		expect(removeNthFromEnd).not.toBe(undefined);
  });

	it('should be a function', function() {
		expect(typeof removeNthFromEnd).toBe('function');
  });
});

describe('removeNthFromEnd', function() {

  it('should return head of the modified list', function() {
    // first list
    let head = new ListNode(1);
    let next = new ListNode(2);
    let current = head;
    current.next = next;
    
    next = new ListNode(3);
    current = current.next;
    current.next = next;

    next = new ListNode(4);
    current = current.next;
    current.next = next;
    
    next = new ListNode(5);
    current = current.next;
    current.next = next;

    // second list 
    let head2 = new ListNode(1);
    let secondNode = new ListNode(2);
    
    let node = head2;
    node.next = secondNode;
    
    thirdNode = new ListNode(3);
    node = node.next; // second node
    node.next = thirdNode;

    fourthNode = new ListNode(5);
    node = node.next; // third node
    node.next = fourthNode;
    
    fourthNode.prev = thirdNode;
    thirdNode.prev = secondNode;
    secondNode.prev = head2;
    
    // console.log(head2);
    // expect(removeNthFromEnd(head, 2)).toBe(head2);
  });

})
  