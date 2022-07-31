/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {
    const graph = prepareInput(n, dislikes)
    
    const colors = new Map();
    const stack = [];
    
    for (let i = 0; i < graph.length; i++) {
        if (colors.has(i)) continue;
        
        colors.set(i, true);
        stack.push(i);
        
        while (stack.length > 0) {
            let current = stack.pop();
            for (let neighbour of graph[current]) {
                
                if (!colors.has(neighbour)) {
                    colors.set(neighbour, !colors.get(current));
                    stack.push(neighbour);
                    continue;
                }
                if (colors.get(neighbour) === colors.get(current)) return false;
            }
        }
    }
    
    return true
};

const prepareInput = (n, dislikes) =>{
    const graph = [...Array(n+1)].map(e=> [])
    for(let i=0; i<dislikes.length; i++){
        graph[dislikes[i][0]].push(dislikes[i][1])
        graph[dislikes[i][1]].push(dislikes[i][0])
    }
    return graph
}