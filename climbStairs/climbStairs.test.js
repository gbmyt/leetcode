const climbStairs = require ('./climbStairs.js');

describe('climbStairs Import', function() {
  it('should exist', function() {
		expect(climbStairs).not.toBe(undefined);
  });

	it('should be a function', function() {
		expect(typeof climbStairs).toBe('function');
  });
});

describe('Functionality', function() {

  it('should return the number of ways you can combine steps to reach the top of the staircase', function() {
    let n = 3;
    expect(climbStairs(n)).toBe(3);    
    
    n = 2;
    expect(climbStairs(n)).toBe(2);    

    n = 8;
    expect(climbStairs(n)).toBe(34);    
  });

  it('should not accept negative numbers', function() {
    let n = -8;
    expect(climbStairs(n)).not.toBe(1);
    expect(climbStairs(n)).not.toBe(34);
    expect(climbStairs(n)).toBe(0);
  });

});
  