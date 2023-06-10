const isValid = require ('./isValid.js');

describe('isValid Import', function() {
  it('should exist', function() {
		expect(isValid).not.toBe(undefined);
  });

	it('should be a function', function() {
		expect(typeof isValid).toBe('function');
  });
});

describe.only('Functionality', function() {

  it('should return false for a string of length 0 or 1', function() {
    let s = '';
    expect(isValid(s)).toBe(false);
    
    s = '(';
    expect(isValid(s)).toBe(false);
    
  });

  it('should return false for a string with non-paren type characters', function() {
    s = 'x';
    expect(isValid(s)).toBe(false);
  });


  it('should return true for a pair of valid parentheses', function() {
    let s = '()';
    expect(isValid(s)).toBe(true);
  });

  it('should return false for a pair of mismatched parentheses', function() {
    let s = '(]';
    expect(isValid(s)).toBe(false);

    s = '((';
    expect(isValid(s)).toBe(false);
    
    s = '[[[]';
    expect(isValid(s)).toBe(false);
  });

  it('should validate nested parens', function() {
    let s = '{[]}'
    expect(isValid(s)).toBe(true);
  });

});
  