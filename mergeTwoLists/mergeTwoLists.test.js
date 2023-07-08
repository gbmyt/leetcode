const { ListNode, mergeTwoLists } = require('./mergeTwoLists.js');

describe('mergeTwoLists Import', function() {
  it('should exist', function() {
		expect(mergeTwoLists).not.toBe(undefined);
  });

	it('should be a function', function() {
		expect(typeof mergeTwoLists).toBe('function');
  });
});

describe('Functionality', function() {

  it('should return the head node of the newly merged list', function() {
    let list1 = ListNode([1,2,4]);
    let list2 = ListNode([1,3,4]);
    expect(mergeTwoLists(list1, list2)).toEqual([1,1,2,3,4,4]);
    // expect(mergeTwoLists(list1, list2)).toEqual(expect.arrayContaining([1,1,2,3,4,4]));
  });

  it('should return an empty node when both input lists are empty', function() {
    let list1 = ListNode([]);
    let list2 = ListNode([]);
    expect(mergeTwoLists(list1, list2)).toEqual([]);
    // expect(mergeTwoLists(list1, list2)).toEqual(expect.arrayContaining([]));
  });

  it('should return a single node list when only one input list has non-null nodes', function() {
    let list1 = ListNode([]);
    let list2 = ListNode([0]);
    expect(mergeTwoLists(list1, list2)).toEqual([0]);
    // expect(mergeTwoLists(list1, list2)).toEqual(expect.arrayContaining([0]));
  });

});
  