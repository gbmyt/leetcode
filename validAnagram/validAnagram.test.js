const isAnagram = require ('./validAnagram.js');

describe('isAnagram Import', function() {
  it('should exist', function() {
		expect(isAnagram).not.toBe(undefined);
  });

	it('should be a function', function() {
		expect(typeof isAnagram).toBe('function');
  });
});

describe.only('Functionality', function() {
    it('should return true for two strings that are anagrams of each other', function() {
        let s = 'anagram';
        let t = 'nagaram';
        expect(isAnagram(s, t)).toBe(true);
    });
    
    it('should return false for two strings that cannot be used to make anagrams from each other', function() {
        let s = 'part';
        let t = 'top';
        expect(isAnagram(s, t)).toBe(false);

        s = 'rat';
        t = 'car';
        expect(isAnagram(s, t)).toBe(false);

        s = 'aacc';
        t = 'ccac';

      expect(isAnagram(s, t)).toBe(false);
    });

    it('should return false for two input strings of different lengths', function() {
      let s = 'party';
      let t = 'car';

      expect(isAnagram(s, t)).toBe(false);
    });

  });
  