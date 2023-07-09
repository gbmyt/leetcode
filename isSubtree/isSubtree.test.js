const { isSubtree, TreeNode } = require('./isSubtree.js');

describe('isSubtree Import', function() {
  it('should exist', function() {
		expect(isSubtree).not.toBe(undefined);
  });

	it('should be a function', function() {
		expect(typeof isSubtree).toBe('function');
  });
});

describe('isSubtree', function() {

  it('should return true if t is a valid subtree of s', function() {
    let s = new TreeNode(3);
    let t = new TreeNode(4);

    let left = new TreeNode(4);
    s.left = left;
    let right = new TreeNode(5);
    s.right = right;

    s.left.left = new TreeNode(1);
    s.left.right = new TreeNode(2);

    t.left = new TreeNode(1);
    t.right = new TreeNode(2);

    expect(isSubtree(s, t)).toBe(true);
  
  });

  it('should should return false if t is not a valid subtree of s', function() {

    let s = new TreeNode(3);
    let t = new TreeNode(4);

    let left = new TreeNode(4);
    s.left = left;

    let right = new TreeNode(5);
    s.right = right;

    s.left.left = new TreeNode(1);
    s.left.right = new TreeNode(2);

    t.left = new TreeNode(6);
    t.right = new TreeNode(2);

    expect(isSubtree(s, t)).toBe(false);
  });

  it('should should return true for two empty input trees', function() {
  
    let s = new TreeNode(null);
    let t = new TreeNode(null);
    expect(isSubtree(s, t)).toBe(true);

  });

  it('should should return false if s is null but t is not', function() {
  
    let s = new TreeNode(null);
    let t = new TreeNode(4);
    expect(isSubtree(s, t)).toBe(false);

  });

  it('should should return true if t is null but s is not', function() {
  
    let s = new TreeNode(4);
    let t = new TreeNode(null);
    expect(isSubtree(s, t)).toBe(false);

  });


});
  