/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
  if (edges.length === 0) {
    return [0];
  }
  
  const graph = makeAdjacencyList(n, edges);
  let m = n;
  let leaves = [];
  
  for (const [node, adj] of graph) {
    if (adj.size === 1) {
      leaves.push(node);
    }
  }
  
  while (m > 2) {
    m -= leaves.length;
    // The goal is to remove leaves from graph and find new leaves
    const newLeaves = [];
    
    for (const leaf of leaves) {
      const neighbor = graph.get(leaf).values().next().value;
      // a leaf only connects to one neighbor
      graph.get(neighbor).delete(leaf);
      // keep track of new leaves when if a node becomes a leaf after deletion
      if (graph.get(neighbor).size === 1) {
        newLeaves.push(neighbor);
      }
      graph.delete(leaf);
    }
    leaves = newLeaves;
  }
  return leaves;
};

function makeAdjacencyList(n, edges) {
  const adjacencyList = new Map();
  
  for (let i = 0; i < n; i++) {
    adjacencyList.set(i, new Set());
  }
  for (const [v1, v2] of edges) {
    adjacencyList.get(v1).add(v2);
    adjacencyList.get(v2).add(v1);
  }
  return adjacencyList;
}