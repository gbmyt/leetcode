const pacificAtlantic = require('./pacificAtlantic.js');

describe('pacificAtlantic Import', function() {
  it('should exist', function() {
		expect(pacificAtlantic).not.toBe(undefined);
  });

	it('should be a function', function() {
		expect(typeof pacificAtlantic).toBe('function');
  });
});

describe('pacificAtlantic', function() {

  it('should return a list of cell coordinates from which a valid path can be taken to BOTH oceans', function() {

    let heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]];
    let expected = [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]];    
    expect(pacificAtlantic(heights)).toEqual(expected);
    
  });
  
  it('should should return the first cell coordinate for a 1x1 size board', function() {
    let heights = [[1]];
    let expected = [[0,0]];    
    expect(pacificAtlantic(heights)).toEqual(expected);
  });

}); 