const isSameTree = require ('./isSameTree.js').isSameTree;
const TreeNode = require ('./isSameTree.js').TreeNode;

describe('isSameTree Import', function() {
  it('should exist', function() {
		expect(isSameTree).not.toBe(undefined);
  });

	it('should be a function', function() {
		expect(typeof isSameTree).toBe('function');
  });
});

describe('Functionality', function() {
  
  it('should return true if the trees are the same', function() {
    const p = TreeNode(1, TreeNode(2, null, null), TreeNode(3, null, null));
    const q = TreeNode(1, TreeNode(2, null, null), TreeNode(3, null, null));

    expect(isSameTree(p, q)).toBe(true);
  });

  it('should not return true if the trees are different', function() {
    const first = TreeNode(1, TreeNode(20, null, null), TreeNode(33, null, null));
    const second = TreeNode(1, TreeNode(3, null, null), TreeNode(54, null));

    expect(isSameTree(first, second)).not.toBe(true);
    expect(isSameTree(p, q)).toBe(false);
  });

});
  