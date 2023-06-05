const containsDuplicate = require ('./containsDuplicate.js');

describe('containsDuplicate Import', function() {
  it('should exist', function() {
		expect(containsDuplicate).not.toBe(undefined);
  });

	it('should be a function', function() {
		expect(typeof containsDuplicate).toBe('function');
  });
});

describe.only('Functionality', function() {
    it('should return true when there are 1 or more duplicates', function() {
        let nums = [1,2,3,1];
        let numsTwo = [1,1,1,3,3,4,3,2,4,2];
        expect(containsDuplicate(nums)).toBe(true);
        expect(containsDuplicate(numsTwo)).toBe(true);
    });
    
    it('should return false when there are no duplicates', function() {
        let nums = [1,2,3,4];
        expect(containsDuplicate(nums)).toBe(false);
    });
  });
  