const threeSum = require ('./threeSum.js');

describe('threeSum  Import', function() {
  it('should exist', function() {
		expect(threeSum).not.toBe(undefined);
  });

	it('should be a function', function() {
		expect(typeof threeSum).toBe('function');
  });
});

describe('Functionality', function() {

  it('should return an empty array if there are no valid triplicate sets', function() {
    let nums = [1, 8, 6];
    expect(threeSum(nums)).toEqual([]);
    
    nums = [1, 2, -6];
    expect(threeSum(nums)).toEqual([]);
  });

  it('should return all valid triplicate sets found in the input array', function() {
    let nums = [0, 0, 0];
    let result = [[0, 0, 0]];
    expect(threeSum(nums)).toEqual(result);

    nums = [-1,0,1,2,-1,-4];
    result = [[ -1, -1, 2 ], [ -1, 0, 1 ]];
    expect(threeSum(nums)).toEqual(expect.arrayContaining(result));
    
    nums = [-1,0,1,2,-1,-4,-2,-3,3,0,4];
    result = [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]];
    expect(threeSum(nums)).toEqual(expect.arrayContaining(result));
  });

});
  