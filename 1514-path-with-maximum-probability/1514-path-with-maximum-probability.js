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
    
    const maxHeap = new BinaryHeap((a, b) => b[1] - a[1]);
    
    maxHeap.insert([ start, 1 ]);
    
    while (maxHeap.size()) {
        // pop
        const [ node, prob ] = maxHeap.extract();
        //check goal
        if (isGoal(node, end)) return prob;
        
        //check pass
        if (dists[node] > prob) continue;
        
        //check nieghbours
        for (const [nei, weight] of adjList[node]) {
            if (check(prob, weight, dists, nei)) {
                dists[nei] = prob * weight;
                maxHeap.insert([nei, dists[nei]]);
            }
        }
           
    }
    
    return 0;
};

const isGoal = (node, end) => node === end

const check = (prob, weight, dists,nei) => prob * weight > dists[nei]




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
