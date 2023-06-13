const isPalindrome = require ('./validPalindrome.js');

describe('isPalindrome Import', function() {
  it('should exist', function() {
		expect(isPalindrome).not.toBe(undefined);
  });

	it('should be a function', function() {
		expect(typeof isPalindrome).toBe('function');
  });
});

describe('Functionality', function() {

  it('should return true if the string is a valid palindrome', function() {
    expect(isPalindrome("race a car")).toBe(false);
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
    
  });

  it('should return false if the string is not a valid palindrome', function() {
    let str = 'a busy bee'
    expect(isPalindrome(str)).toBe(false);
  });
  
  it('should return true for an empty string', function() {
    let str = " "
    expect(isPalindrome(str)).toBe(true);
  });
  
  it('should disregard non-alphanumeric characters when validating input string', function() {
    let str = "......a....."
    expect(isPalindrome(str)).toBe(true);
  });

});
  