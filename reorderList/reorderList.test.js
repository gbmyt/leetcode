const { ListNode, reorderList} = require('./reorderList.js');

describe('reorderList Import', function() {
  it('should exist', function() {
		expect(reorderList).not.toBe(undefined);
  });

	it('should be a function', function() {
		expect(typeof reorderList).toBe('function');
  });
});

describe('reorderList', function() {

  it('should return the head node of the newly merged list', function() {
    let head = [];
    let expected = [];
    expect(reorderList(head)).toEqual(expected);
  });

});
  