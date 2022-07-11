var makeConnected = function(n, connections) {
    let edges = connections.length;
    
    if(edges < n-1) return -1;
    
    let nodesConnections = [];
    
    for(let i=0;i<n;i++) nodesConnections[i] = []
    
    for(let i=0;i<edges;i++){
        nodesConnections[connections[i][0]].push(connections[i][1]);
        nodesConnections[connections[i][1]].push(connections[i][0]);
    } 
    
    
    let v = Array(n).fill(0)
    let c = 0;
    
    const dfs = (i)=>{
        v[i] = 1;
        for(let x of nodesConnections[i]){
            if(!v[x]) dfs(x)
        }
    }
     
    for(let i=0;i<n;i++){
        if(!v[i]){
            c++;
            dfs(i)
        }
    }

    
    return c-1;
};
