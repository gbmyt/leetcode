const missingNumber = require ('./missingNumber.js');

describe('missingNumber Import', function() {
  it('should exist', function() {
		expect(missingNumber).not.toBe(undefined);
  });

	it('should be a function', function() {
		expect(typeof missingNumber).toBe('function');
  });
});

describe('Functionality', function() {

  it('should return the number that is missing from the array', function() {
    let nums = [0, 3, 1];
    expect(missingNumber(nums)).toBe(2);
    
    nums = [9, 4, 7, 5, 0, 3, 6, 1, 2];
    expect(missingNumber(nums)).toBe(8);
    
    nums = [0, 1];
    expect(missingNumber(nums)).toBe(2);
  });
  
  it('should return 0 for an empty array or incorrect data type', function() {
    let nums = '01235678';
    expect(missingNumber(nums)).toBe(0);
  });


});
  