/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const graph = prepareInput(isConnected)
    const visited = {}
    let ans = 0
    
    for(let i =0;i<isConnected.length; i++){
        if(!visited[i]){
            ans++
            dfs(i,visited,graph)
        }       
    }
    
    return ans
    
    
};

const dfs = (node,visited,graph) =>{
    visited[node] = true
    for(let neigh of graph[node])
    if(!visited[neigh])
        dfs(neigh,visited,graph)
    
    
}

const prepareInput = (isConnected) =>{
    const graph = new Array(isConnected.length)
    for(let i=0; i<isConnected.length; i++) graph[i] = new Array(0)
    
    for(let i=0; i<isConnected.length; i++){
            for(let j=0; j<isConnected[i].length; j++){
            if(isConnected[i][j] && j !== i){
                graph[i].push(j)
            }
        }
    }
    
    return graph
}