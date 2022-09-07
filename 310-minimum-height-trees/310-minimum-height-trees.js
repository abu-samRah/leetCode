/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(nodes, edges) {
    if (nodes <= 0) {
    return [];
  }

  if (nodes === 1) {
    return [0];
  }
    
  const inDegree = Array(nodes).fill(0); 
  const graph = Array(nodes).fill(0).map(() => Array()); 

  edges.forEach((edge) => {
    let n1 = edge[0],
      n2 = edge[1];
    graph[n1].push(n2);
    graph[n2].push(n1);
    inDegree[n1] += 1;
    inDegree[n2] += 1;
  });

  const leaves = [];
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 1) {
      leaves.push(i);
    }
  }

  let totalNodes = nodes;
  while (totalNodes > 2) {
    let leavesSize = leaves.length;
    totalNodes -= leavesSize;
    for (i = 0; i < leavesSize; i++) {
      const front = leaves.shift();
      graph[front].forEach((child) => {
        inDegree[child] -= 1;
        if (inDegree[child] === 1) {
          leaves.push(child);
        }
      });
    }
  }

  return leaves;
}