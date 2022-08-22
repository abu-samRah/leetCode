/**
 * @param {number[][]} nums
 * @return {number[]}
 */

 class MinHeap {
        
        constructor(capacity) {
            this.capacity = capacity;
            this.value = [];
        }
        
        add(val) {
            this.value.push(val);
            this.bubbleUp(this.value.length-1);
            if(this.value.length > this.capacity) this.remove();
        }
        
        remove() {
            this.swap(0, this.value.length-1);
            const min = this.value.pop();
            this.trickleDown(0);  
            return min;
        }
        
        bubbleUp(idx) {
            const parent = Math.floor((idx-1)/2);
            let max = idx;
            
            if(parent >= 0 && this.value[parent][0] > this.value[max][0]) max = parent;
            
            if(max !== idx) {
                this.swap(max, idx);
                this.bubbleUp(max);
            }
        }
        
        trickleDown(idx) {
            const leftChild = 2 * idx + 1;
            const rightChild = 2 * idx + 2;
            let min = idx;
            
            if(leftChild < this.value.length && this.value[leftChild][0] < this.value[min][0]) min = leftChild;
            if(rightChild < this.value.length && this.value[rightChild][0] < this.value[min][0]) min = rightChild;
            
            if(min !== idx) {
                this.swap(min, idx);
                this.trickleDown(min);
            }
        }
        
        swap(i, j) {
            [this.value[i], this.value[j]] = [this.value[j], this.value[i]];
        }
     
     length(){
         return this.value.length
     }
    }

var smallestRange = function(lists) {
    const minHeap = new MinHeap(lists.length*lists.length)
    
    let rangeStart = 0,
    rangeEnd = Infinity,
    currentMaxNumber = -Infinity;

  lists.forEach((list) => {
    minHeap.add([list[0], 0, list]);
    currentMaxNumber = Math.max(currentMaxNumber, list[0]);
  })
    
  while (minHeap.length() === lists.length) {
    const [num, i, list] = minHeap.remove();
    if (rangeEnd - rangeStart > currentMaxNumber - num) {
      rangeStart = num;
      rangeEnd = currentMaxNumber;
    }
    if (list.length > i + 1) {
      minHeap.add([list[i + 1], i + 1, list]);
      currentMaxNumber = Math.max(currentMaxNumber, list[i + 1]);
    }
  }

  return [rangeStart, rangeEnd];
};