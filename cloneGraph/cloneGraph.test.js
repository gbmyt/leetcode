const { cloneGraph, Node } = require('./cloneGraph.js');

describe('cloneGraph Import', function() {
  it('should exist', function() {
		expect(cloneGraph).not.toBe(undefined);
  });

	it('should be a function', function() {
		expect(typeof cloneGraph).toBe('function');
  });
});

describe('cloneGraph', function() {

  it('should return a deep copy of the graph', function() {
    // todo
    // let graph = ;
    // expect(cloneGraph(node)).node.toEqul(graph);
  });

}); 