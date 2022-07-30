/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const ans = []
    const n = graph.length - 1
    
    const dfs = (i, path) =>{
        if(i === n) ans.push(path) 
        for(let neigh of graph[i])
            dfs(neigh, [...path,neigh])
    }
    
    dfs(0,[0])
    
    return ans
};