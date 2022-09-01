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


/*
[1,2,3,4,5] 

    2
   / \
  0   1 
   \
    1
*/

const findClosestElements = function (arr, k, x) {
	const maxHeap = new BinaryHeap((a,b) => (Math.abs(b-x)) - (Math.abs(a-x)))
    
    for(let i=0; i<arr.length; i++){
        if(maxHeap.size() < k) maxHeap.insert(arr[i])
        else{
            const b = arr[i]
            const a = maxHeap.peak()
            if( Math.abs(b-x) < Math.abs(a-x) ){
                 maxHeap.extract()
                 maxHeap.insert(b)
            }
        }
    }
    
     const res = []
    while (maxHeap.size()){
        res.push(maxHeap.extract())
    }
     return res.sort((a,b) => a-b);
};