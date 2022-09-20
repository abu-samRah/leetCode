/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
   const adjList = {}
   //const dists = new Array(n).fill(Infinity)
   const visited = new Map();
   
   for(let i=0; i<n; i++) adjList[i] = []
    
    for(let i =0; i<flights.length; i++){
        const [parent,child,cost] = flights[i]
        adjList[parent].push([child,cost])
    }
    
    const minHeap = new BinaryHeap((a,b) => a[1] - b[1])
    
    minHeap.insert([src,0,k+1])
    
    while(minHeap.size()){
        const[city,cost,stops] = minHeap.extract()
        visited.set(city, stops);
        
        if(isGoal(city,dst)) return cost
        
        if(stops <= 0) continue
        
        for(let i=0; i<adjList[city].length; i++){
            const[nextCity,newCost] = adjList[city][i]
            if(check(stops,nextCity,visited)){
                minHeap.insert([nextCity,newCost+cost,stops-1])
            }
        }
    }
    
    return -1
};

const isGoal = (node, end) => node === end

const check = (stops,nextCity,visited) => !(visited.has(nextCity) && visited.get(nextCity) >= stops-1)


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