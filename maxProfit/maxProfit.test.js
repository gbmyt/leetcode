const maxProfit = require ('./maxProfit.js');

describe('maxProfit Import', function() {
  it('should exist', function() {
		expect(maxProfit).not.toBe(undefined);
  });

	it('should be a function', function() {
		expect(typeof maxProfit).toBe('function');
  });
});

describe('Functionality', function() {

  it('should return the maximum possible profit based on the provided input prices', function() {
    let prices = [7,1,5,3,6,4];
    expect(maxProfit(prices)).toBe(5);
    
    prices = [1,2];
    expect(maxProfit(prices)).toBe(1);
    
    prices = [2,4,1];
    expect(maxProfit(prices)).toBe(2);
    
    prices = [2,1,2,0,1]
    expect(maxProfit(prices)).toBe(1);
  });

  it('should return 0 for a prices array of size 1 or smaller', function() {
    let prices = [1];
    expect(maxProfit(prices)).toBe(0);
  });
  
  it('should return 0 if there is no potential profit to be made', function() {
    let prices = [7, 6, 4, 3]
    expect(maxProfit(prices)).toBe(0);
  });

});
  