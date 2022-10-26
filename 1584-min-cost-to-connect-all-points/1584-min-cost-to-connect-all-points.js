/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    const adjList = {}
    const N = points.length
    
    for(let i=0; i<N; i++){
        const [x1,y1] = points[i]
        for (let j=i+1; j < N; j++){
            const [x2,y2] = points[j]
            const cost = Math.abs(x1-x2) + Math.abs(y1-y2)
            if(!adjList[i]) adjList[i] = []
            if(!adjList[j]) adjList[j] = []
            
            adjList[i].push([cost,j])
            adjList[j].push([cost,i])
        }
    }
    
    const minHeap = new BinaryHeap((a, b) => a[0] - b[0]);
    minHeap.insert([0,0])
    
    const visited = new Map()
    let totalCost = 0
    
    while(visited.size < N){
        const [cost,i] = minHeap.extract()
        if(visited.has(i)) continue
        visited.set(i,true)
        totalCost += cost
        if(!adjList[i]) continue
        for(let x=0 ;x<adjList[i].length; x++){
            const [neighCost , neigh] = adjList[i][x]
            if(!visited.has(neigh))
                minHeap.insert([neighCost,neigh])
        }
    }
    
    return totalCost
};





class BinaryHeap {
  constructor(comparator = (a, b) => {
  	return (a < b) ? -1 : (a === b ? 0 : 1);
  }) {
    this.heap = [];
    this.comparator = comparator;
  }
  size() {
    return this.heap.length;
  }

  getLeftIndex(index) {
  	return 2 * index + 1;
  }
  getRightIndex(index) {
  	return 2 * index + 2;
  }
  getParentIndex(index) {
  	return Math.floor((index - 1) / 2);
  }
    
    insert(data) {
  	if (data === undefined || data === null) {
    	return false;
    }
    this.heap.push(data);
    this.bubbleUp(this.heap.length - 1);
    return true;
  }
  bubbleUp(index) {    
    while (index > 0) {
      let curr = this.heap[index];
      let parentIndex = this.getParentIndex(index);
      let parent = this.heap[parentIndex];
      
      let compare = this.comparator(parent, curr);
      if (compare < 0 || compare === 0) {
        break;
      }
      
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }
  swap(a, b) {
  	[this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
    
    peak() {
  	return this.size() > 0 ? this.heap[0] : undefined;
  }
    
    extract() {
  	if (this.size() === 0) {
    	return undefined;
    }
    
    if (this.size() === 1) {
    	return this.heap.shift();
    }
    
    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    return value;
  }
  sinkDown(currIndex) {
    let left = this.getLeftIndex(currIndex);
    let right = this.getRightIndex(currIndex);
    let parentIndex = currIndex;
    
    if (left < this.size() && this.comparator(this.heap[left], this.heap[parentIndex]) < 0) {
      parentIndex = left;
    }
    
    if (right < this.size() && this.comparator(this.heap[right], this.heap[parentIndex]) < 0) {
      parentIndex = right;
    }
    
    if (parentIndex !== currIndex) {
    	this.swap(parentIndex, currIndex);
      this.sinkDown(parentIndex);
    }
  }
    
    values(){
        return this.heap
    }
}
