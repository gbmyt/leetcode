const longestConsecutive = require ('./longestConsecutiveSequence.js');

describe('longestConsecutive Import', function() {
  it('should exist', function() {
		expect(longestConsecutive).not.toBe(undefined);
  });

	it('should be a function', function() {
		expect(typeof longestConsecutive).toBe('function');
  });
});

describe.only('Functionality', function() {

  it('should return the length of the longest consecutive sequence of elements in the input array', function() {
    let nums = [100, 4, 200, 3, 1, 2]
    expect(longestConsecutive(nums)).toBe(4);
  });

  it('should return the longest sequence in an array with multiple sequences', function() {
    let nums = [5, 88, 4, 87, 3, 1, 2, 86]
    expect(longestConsecutive(nums)).toBe(5);
  });

  
  it('should handle duplicate elements in the input array', function() {
    let nums = [0, 1, 2, 1];
    expect(longestConsecutive(nums)).toBe(3);
    
    nums = [0, 0];
    expect(longestConsecutive(nums)).toBe(1);
  });

  
  it('should return 0 for an array of length 1', function() {
    let nums = [1];
    expect(longestConsecutive(nums)).toBe(1);
  });

  it('should handle negative numbers', function() {
    let nums = [1, 32, -1, 0, 2, 88, 15];
    expect(longestConsecutive(nums)).toBe(4);
    
    nums = [1, 32, -1, 0, 2, -2, 15, 9, 11, 88, 10];
    expect(longestConsecutive(nums)).not.toBe(3);
    expect(longestConsecutive(nums)).toBe(5);
  });


});
  