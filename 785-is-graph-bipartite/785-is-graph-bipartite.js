var isBipartite = function(graph) {
    const colors = new Map();
    const queue = [];
    
    for (let i = 0; i < graph.length; i++) {
        if (colors.has(i)) continue;
        
        colors.set(i, true);
        queue.push(i);
        
        while (queue.length > 0) {
            let current = queue.shift();
            for (let neighbour of graph[current]) {
                
                if (!colors.has(neighbour)) {
                    colors.set(neighbour, !colors.get(current));
                    queue.push(neighbour);
                }
                else if (colors.get(neighbour) === colors.get(current)) return false;
            }
        }
    }
    
    return true
};