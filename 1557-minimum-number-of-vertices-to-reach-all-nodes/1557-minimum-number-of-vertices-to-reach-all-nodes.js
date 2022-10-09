/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {

    const ans = []
    const graph = new Array(n).fill(0)
    
    for(let i=0; i<edges.length;i++){
        graph[edges[i][1]] = 1
    }
       

    for(let i=0; i<n;i++)
        !graph[i] && ans.push(i)
    
    return ans
};