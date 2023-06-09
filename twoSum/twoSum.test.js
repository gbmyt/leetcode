const twoSum = require ('./twoSum.js');

describe('twoSum Import', function() {
  it('should exist', function() {
		expect(twoSum).not.toBe(undefined);
  });

	it('should be a function', function() {
		expect(typeof twoSum).toBe('function');
  });
});

describe.only('Functionality', function() {
  it('should return an empty array when given an input array of length 1 or 0', function() {
    let arr1 = [2];
    let arr2 = [];
    let target = 6;

    expect(twoSum(arr1, target)).toEqual([]);
    expect(twoSum(arr2, target)).toEqual([]);
  });

  it('should return an array of indices representing array integers that sum to the target int', function() {
      let arr = [2, 3, 4];
      let target = 6;

      expect(twoSum(arr, target)).toEqual([0, 2]);
      expect(twoSum(arr, target)).not.toEqual([1, 2]);
      expect(twoSum(arr, target)).not.toEqual([0, 1]);
    });

    it('should not use the same element twice', function() {
      let arr = [2, 5, 5, 11];
      let target = 10;
      expect(twoSum(arr, target)).toEqual([1, 2]);
      expect(twoSum(arr, target)).not.toEqual([1, 1]);
    });


});
  