const reverseLinkedList = require ('./reverseLinkedList.js');

describe('reverseLinkedList Import', function() {
  it('should exist', function() {
		expect(reverseLinkedList).not.toBe(undefined);
  });

	it('should be a function', function() {
		expect(typeof reverseLinkedList).toBe('function');
  });
});

// describe('reverseLinkedList', function() {
// 	it('should swap the head and tail of a singly linked list with 2 nodes', function() {
// 		var root = Node('0');
// 		var first = root.next = Node('1');

// 		var newRoot = reverseLinkedList(root);
// 		expect(newRoot.value).toBe('1');
// 		expect(newRoot.next.value).toBe('0');
//   });

// 	it('should reverse a singly-linked list with 3 or more nodes', function() {
// 		var root = Node('0');
// 		var first = root.next = Node('1');
// 		var second = first.next = Node('2');
// 		var third = second.next = Node('3');
// 		var fourth = third.next = Node('4');

// 		var newRoot = reverseLinkedList(root);
// 		expect(newRoot.value).toBe('4');
// 		expect(newRoot.next.value).toBe('3');
// 		expect(root.next).toBe(null);
//   });
// });