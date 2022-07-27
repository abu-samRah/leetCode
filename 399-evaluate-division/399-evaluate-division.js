/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const adjList = new Map()
    
    // Initialize the graph
    for(let i=0; i<equations.length; i++){
        adjList.set(equations[i][0], [])
        adjList.set(equations[i][1], [])
    }
    
     // Build the graph
    for(let i=0; i<equations.length; i++){
        const u = equations[i][0]
        const v = equations[i][1]
        const weight = values[i]
        
        adjList.get(u).push([v, weight])
        adjList.get(v).push([u, 1 / weight])
    }
    
    const res = []
    
    for(let i=0; i<queries.length; i++){
        const src = queries[i][0]
        const dst = queries[i][1]
        const seen = new Set();
        
        const val = dfs(adjList,src,src,dst,1,seen)
        
        res.push(val? val : -1)
    }
    
    return res
};

const dfs = (adjList,src,curr,dst,quotient,seen) =>{
    if(!adjList.has(src) || !adjList.has(dst)) return -1
    if(src === dst) return 1
    if(curr === dst) return quotient
    seen.add(curr)
    
    const neighbors = adjList.get(curr);
    
    for (let i=0; i<neighbors.length; i++){
        if(seen.has(neighbors[i][0])) continue
        const val = dfs(adjList, src, neighbors[i][0], dst, quotient * neighbors[i][1], seen);
        if (val !== false) return val
    }
    
    return false
}