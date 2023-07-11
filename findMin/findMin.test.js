const findMin = require('./findMin.js');

describe('findMin Import', function() {
  it('should exist', function() {
		expect(findMin).not.toBe(undefined);
  });

	it('should be a function', function() {
		expect(typeof findMin).toBe('function');
  });
});

describe('findMin', function() {

  it('should should return the minimum element in the sorted rotated array', function() {
    let arr = [3, 4, 5, 1, 2];
    expect(findMin(arr)).toBe(1);
    
    arr = [11, 13, 15, 17];
    expect(findMin(arr)).toBe(11);

    arr = [3,1,2];
    expect(findMin(arr)).toBe(1);

    arr = [4,5,6,7,0,1,2];
    expect(findMin(arr)).toBe(0);

  });

  it('should return the first element of an array with length 1', function() {
    let arr = [0];
    expect(findMin(arr)).toBe(0); 
    
    arr = [1];
    expect(findMin(arr)).toBe(1); 
    
    arr = [];
    expect(findMin(arr)).toBe(0); 
  });

});
  