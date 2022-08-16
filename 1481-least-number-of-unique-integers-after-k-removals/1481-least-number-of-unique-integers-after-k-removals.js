
// ============ Min Heap Class
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
            
            if(parent >= 0 && this.value[parent] > this.value[max]) max = parent;
            
            if(max !== idx) {
                this.swap(max, idx);
                this.bubbleUp(max);
            }
        }
        
        trickleDown(idx) {
            const leftChild = 2 * idx + 1;
            const rightChild = 2 * idx + 2;
            let min = idx;
            
            if(leftChild < this.value.length && this.value[leftChild] < this.value[min]) min = leftChild;
            if(rightChild < this.value.length && this.value[rightChild] < this.value[min]) min = rightChild;
            
            if(min !== idx) {
                this.swap(min, idx);
                this.trickleDown(min);
            }
        }
        
        swap(i, j) {
            [this.value[i], this.value[j]] = [this.value[j], this.value[i]];
        }
        
        length(){return this.value.length}
    }

var findLeastNumOfUniqueInts = function(nums, k) {
  let distinctElementsCount = 0;
  if (nums.length <= k) {
    return distinctElementsCount;
  }
  
 let numFrequencyMap = {};
  nums.forEach((num) => {
    if (!(num in numFrequencyMap)) {
      numFrequencyMap[num] = 1;
    } else {
      numFrequencyMap[num]++;
    }
  });
    
  const minHeap = new MinHeap(nums.length);

  Object.keys(numFrequencyMap).forEach((num) => {
      minHeap.add(numFrequencyMap[num]);
      distinctElementsCount++
  });
    
  while (k > 0 && minHeap.length()){
    const frequency = minHeap.remove();
    k -= frequency;
    if (k >= 0) {
      distinctElementsCount --;
    }
  }

  // if k > 0, this means we have to remove some distinct numbers
  if (k > 0) {
    distinctElementsCount -= k;
  }

  return distinctElementsCount;
};