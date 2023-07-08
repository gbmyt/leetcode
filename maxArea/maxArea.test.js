const maxArea = require('./maxArea.js');

describe('maxArea Import', function() {
  it('should exist', function() {
		expect(maxArea).not.toBe(undefined);
  });

	it('should be a function', function() {
		expect(typeof maxArea).toBe('function');
  });
});

describe('Functionality', function() {

  it('should return the area of the largest possible container', function() {
    let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    expect(maxArea(height)).toBe(49);
  });

  it('should handle an array with only 2 values', function() {
   let height = [1, 1];
   expect(maxArea(height)).toBe(1); 
  });

});
  