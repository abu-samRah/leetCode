/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
var maxProbability = function(n, edges, succProb, start, end) {
    const MIN = Number.MIN_SAFE_INTEGER;
    const m = edges.length;
	
    const adjList = {};
    const dists = new Array(n).fill(MIN);
    
    for (let i = 0; i < n; i++) {
        adjList[i] = [];
    }
    
    for (let i = 0; i < m; i++) {
        const [u, v] = edges[i];
        const weight = succProb[i];
        
        adjList[u].push([v, weight]);
        adjList[v].push([u, weight]);
    }
    
    
    const maxHeap = new MaxPriorityQueue({ priority: x => x[1] });
    
    maxHeap.enqueue([ start, 1 ]);
    
    while (!maxHeap.isEmpty()) {
        // pop
        const [ node, prob ] = maxHeap.dequeue().element;
        //check goal
        if (isGoal(node, end)) return prob;
        
        //check pass
        if (dists[node] > prob) continue;
        
        //check nieghbours
        for (const [nei, weight] of adjList[node]) {
            if (check(prob, weight, dists, nei)) {
                dists[nei] = prob * weight;
                maxHeap.enqueue([nei, dists[nei]]);
            }
        }
           
    }
    
    return 0;
};

const isGoal = (node, end) => node === end

const check = (prob, weight, dists,nei) => prob * weight > dists[nei]