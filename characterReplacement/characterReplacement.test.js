const characterReplacement = require('./characterReplacement.js');

describe('characterReplacement Import', function() {
  it('should exist', function() {
		expect(characterReplacement).not.toBe(undefined);
  });

	it('should be a function', function() {
		expect(typeof characterReplacement).toBe('function');
  });
});

describe('characterReplacement', function() {

  it('should return the length of the longest possible substring found', function() {
    let s = 'ABAB';
    let k = 2;
    expect(characterReplacement(s, k)).toBe(4);
    
    s = 'AABABBA';
    k = 1;
    expect(characterReplacement(s, k)).toBe(4);
  });

  it('should return 0 for a k of 0', function() {
    let s = 'ABAB';
    let k = 0;
    expect(characterReplacement(s, k)).toBe(0);
});

it('should handle input strings that consist of all the same letter', function() {
    let s = 'AAAA';
    let k = 1;
    expect(characterReplacement(s, k)).toBe(3);
});

it('should handle large k values', function() {
    let s = 'AAAABABABBBA';
    let k = 5;
    expect(characterReplacement(s, k)).toBe(10);
  });

})
  