const groupAnagrams = require ('./groupAnagrams.js');

describe('groupAnagrams Import', function() {
  it('should exist', function() {
		expect(isValid).not.toBe(undefined);
  });

	it('should be a function', function() {
		expect(typeof groupAnagrams).toBe('function');
  });
});

describe.only('Functionality', function() {

  it('should return input array with nested/grouped arrays of anagrams', function() {
    const strs = ["eat","tea","tan","ate","nat","bat"];
    const result = [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ];
    expect(groupAnagrams(strs)).toEqual(result);
  });

  it('should return itself wrapped in an extra array for an array of length 1', function() {
    let strs = ['a']
    expect(groupAnagrams(strs)).toEqual([['a']]);

    strs = ['']
    expect(groupAnagrams(strs)).toEqual([['']]);
  });

});
  