const topKFrequent = require ('./topKFrequentElements.js');

describe('groupAnagrams Import', function() {
  it('should exist', function() {
		expect(topKFrequent).not.toBe(undefined);
  });

	it('should be a function', function() {
		expect(typeof topKFrequent).toBe('function');
  });
});

describe('Functionality', function() {

  // it('should return the input array if it\'s length is less than or equal to 1', function() {
  //   const input = [1];
  //   expect(topKFrequent(input, 1)).toEqual([1]);
  // });

  // it('should return an array', function() {
  //   const input = [1, 1, 1, 2, 2, 3];
  //   const result = topKFrequent(input, 2);
  //   expect(Array.isArray(result)).toBe(true);
  //   expect(typeof result).not.toBe('number');
  //   expect(typeof result).not.toBe('float');
  // });

  // it('should return the top k most frequent elements', function() {
  //   const input = [1, 1, 1, 2, 2, 3];
  //   expect(topKFrequent(input, 2)).toEqual([1, 2]);
  // });

  it('should accept the returned items in any order', function() {
    const input = [3, 8, 6, 6, 2, 2, 1, 1, 1];
    const expected = [1, 2, 6];

    expect(topKFrequent(input, 3)).toEqual(expect.arrayContaining(expected));
  });

});
  