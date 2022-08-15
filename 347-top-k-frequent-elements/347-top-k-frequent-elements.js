/**
 * @param {number[]} nums
 * @param {number} k
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
    }

var topKFrequent = function(nums, k) {
    let numFrequencyMap = {};
    nums.forEach((num) => {
        if (!(num in numFrequencyMap)) {
          numFrequencyMap[num] = 1;
        } else {
          numFrequencyMap[num]++;
        }
     });
    
    const minHeap = new MinHeap(k)
    
      Object.keys(numFrequencyMap).forEach((num) => {
        minHeap.add([numFrequencyMap[num], num]);
  });
     const topNumbers = [];
  while (k > 0) {
    topNumbers.push(minHeap.remove()[1]);
      k--
  }

  return topNumbers;
};