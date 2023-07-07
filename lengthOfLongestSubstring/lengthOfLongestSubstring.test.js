const lengthOfLongestSubstring = require('./lengthOfLongestSubstring.js');

describe('lengthOfLongestSubstring Import', function() {
  it('should exist', function() {
		expect(lengthOfLongestSubstring).not.toBe(undefined);
  });

	it('should be a function', function() {
		expect(typeof lengthOfLongestSubstring).toBe('function');
  });
});

describe('lengthOfLongestSubstring', function() {

  it('should return the length of the longest substring in the input string', function() {
    let string = 'abcabca';
    expect(lengthOfLongestSubstring(string)).toBe(3);
    
    string = 'pwwkew';
    expect(lengthOfLongestSubstring(string)).toBe(3);
    
    string = 'dvdf';
    expect(lengthOfLongestSubstring(string)).toBe(3);
  });

  it('should not consider spaces valid characters', function() {
    let string = 'ab cabc d';
    expect(lengthOfLongestSubstring(string)).toBe(3);
  });

  it('should allow digits and symbols', function() {
    let string = 'abc1 def';
    expect(lengthOfLongestSubstring(string)).toBe(4);
  });

});
  