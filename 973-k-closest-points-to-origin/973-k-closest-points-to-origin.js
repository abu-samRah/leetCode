/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

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



var kClosest = function(points, k) {
   
    const maxHeap = new BinaryHeap((b,a) => (Math.pow(a[0],2) + Math.pow(a[1],2)) - (Math.pow(b[0],2) + Math.pow(b[1],2)));
    
    for(let n of points) {
        if(maxHeap.size()<k){
            maxHeap.insert(n)
        }else{
            const b = maxHeap.peak()
            const a = n
            if((Math.pow(a[0],2) + Math.pow(a[1],2)) < (Math.pow(b[0],2) + Math.pow(b[1],2))){
                 maxHeap.extract()
                 maxHeap.insert(a)
            }
        }
    }
    
    const res = []
    while (maxHeap.size()){
        res.push(maxHeap.extract())
    }
     return res;
};