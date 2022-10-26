var minCostConnectPoints = function(points) {
    let sum = 0;
    const length = points.length;
    const minHeap = new MinPriorityQueue({ priority: (item) => item[0] });
    const visited = new Set();

    visited.add(JSON.stringify(points[0]))
    
    for (let i = 1; i < length; i++){   // add frontier of first element to start with
        const item = [getDistance(points[0], points[i]), points[i]];
        minHeap.enqueue([getDistance(points[0], points[i]), points[i]])
    }
    
    while (visited.size < length){
        const  [cost, point] = minHeap.dequeue().element; //dequeue the min cost elem 
        
        if (visited.has(JSON.stringify(point))) continue;
        
        visited.add(JSON.stringify(point));
        sum += cost;

        // add new frontier to minHeap
        for (let i = 0; i < length; i++){
            const distance = getDistance(point, points[i]);
            if (visited.has(JSON.stringify(points[i]))) continue;
            if (distance === 0) continue;
            minHeap.enqueue([distance, points[i]])
        }
    }
    
    return sum;
};
    
function getDistance(p1,p2){
    return Math.abs(p1[0]-p2[0]) + Math.abs(p1[1]-p2[1]);
}