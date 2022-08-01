/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    const graph = [...Array(n)].map(e=>[])
    const ans = []
    
    for(let i=0; i<edges.length;i++)
        graph[edges[i][1]].push(edges[i][0])

    for(let i=0; i<graph.length;i++)
        !graph[i].length && ans.push(i)
    
    return ans
};