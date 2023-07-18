const MedianFinder = require('./medianFinder.js');

describe('MedianFinder Import', function() {
  it('should exist', function() {
		expect(MedianFinder).not.toBe(undefined);
  });

	it('should be a function', function() {
		expect(typeof MedianFinder).toBe('function');
  });
	
  it('should have an addNum and findMedian helper functions', function() {
		expect(MedianFinder.prototype.addNum).not.toBe(undefined);
		expect(MedianFinder.prototype.findMedian).not.toBe(undefined);
  });
});

describe('MedianFinder', function() {

  it('should return the median of all ints in storage', function() {
    let obj = new MedianFinder();
    obj.addNum(1);
    obj.addNum(2);
    obj.addNum(3);
    expect(obj.findMedian()).toBe(2);
  });
  
  it('should handle negative numbers', function() {
    let obj = new MedianFinder();
    obj.addNum(-5);
    obj.addNum(-4);
    obj.addNum(-3);
    obj.addNum(-2);
    obj.addNum(-1);
    expect(obj.findMedian()).toBe(-3);
  });

  it('should handle all zeros numbers', function() {
    let obj = new MedianFinder();
    obj.addNum(0);
    obj.addNum(0)
    expect(obj.findMedian()).toBe(0);
  });

  it('should handle unsorted numbers', function() {
    let obj = new MedianFinder();
    obj.addNum(-4);
    obj.addNum(-1);
    obj.addNum(-3);
    obj.addNum(-2);
    obj.addNum(-5);

    expect(obj.findMedian()).toBe(-3);
  });

}); 