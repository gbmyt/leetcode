const findDuplicate = require ('./findDuplicate.js');

describe('findDuplicate Import', function() {
  it('should exist', function() {
		expect(findDuplicate).not.toBe(undefined);
  });

	it('should be a function', function() {
		expect(typeof findDuplicate).toBe('function');
  });
});

describe.only('Functionality', function() {

  it('should return the duplicate number in the input array', function() {
    let nums = [1,3,4,2,2];
    expect(findDuplicate(nums)).toBe(2);

    nums = [3,1,3,4,2];
    expect(findDuplicate(nums)).toBe(3);
    
    nums = [2,2,2,2,2];
    expect(findDuplicate(nums)).toBe(2);
  });

  it('should return 0 for an array with no duplicates in it', function() {
    let nums = [1,3,4,2,8];
    expect(findDuplicate(nums)).toBe(0);

    nums = [];
    expect(findDuplicate(nums)).toBe(0);

    nums = [1];
    expect(findDuplicate(nums)).toBe(0);
  });


});
  