const minWindow = require('./minWindow.js');

describe('minWindow Import', function() {
  it('should exist', function() {
		expect(minWindow).not.toBe(undefined);
  });

	it('should be a function', function() {
		expect(typeof minWindow).toBe('function');
  });
});

describe('minWindow', function() {

  it('should return the length of the longest substring in the input string', function() {
    let s = 'ADOBECODEBANC';
    let t = 'ABC';
    expect(minWindow(s, t)).toBe('BANC');

    s = 'bdab';
    t = 'ab';
    expect(minWindow(s, t)).toBe('ab');
  
  });

  it('should return an empty string if no valid substring is found', function() {
    let s = 'a';
    let t = 'aa';
    expect(minWindow(s, t)).toBe('');
  });

  it('should return an empty string if provided an empty string as input', function() {
    let s = '';
    let t = 'a';
    expect(minWindow(s, t)).toBe('');
  });

});
  