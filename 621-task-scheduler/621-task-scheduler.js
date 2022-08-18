/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

/** 
 *  custom Heap class
 */
class Heap {
	constructor(comparator) {
		this.size = 0;
		this.values = [];
		this.comparator = comparator;
	}

	add(val) {
		this.values.push(val);
		this.size ++;
		this.bubbleUp();
	}

	peek() {
		return this.values[0] || null;
	}
    
    length() {
		return this.values.length;
	}

	poll() {
		const max = this.values[0];
		const end = this.values.pop();
		this.size --;
		if (this.values.length) {
			this.values[0] = end;
			this.bubbleDown();
		}
		return max;
	}

	bubbleUp() {
		let index = this.values.length - 1;
		let parent = Math.floor((index - 1) / 2);

		while (this.comparator(this.values[index], this.values[parent]) < 0) {
			[this.values[parent], this.values[index]] = [this.values[index], this.values[parent]];
			index = parent;
			parent = Math.floor((index - 1) / 2);
		}
	}

	bubbleDown() {
		let index = 0, length = this.values.length;

		while (true) {
			let left = null,
				right = null,
				swap = null,
				leftIndex = index * 2 + 1,
				rightIndex = index * 2 + 2;

			if (leftIndex < length) {
				left = this.values[leftIndex];
				if (this.comparator(left, this.values[index]) < 0) swap = leftIndex;
			}

			if (rightIndex < length) {
				right = this.values[rightIndex];
				if ((swap !== null && this.comparator(right, left) < 0) || (swap === null && this.comparator(right, this.values[index]))) {
					swap = rightIndex;
				}
			}
			if (swap === null) break;

			[this.values[index], this.values[swap]] = [this.values[swap], this.values[index]];
			index = swap;
		}
	}
}



var leastInterval = function(tasks, n) {
 const freqMap = {}
    for(const task of tasks) freqMap[task] = (freqMap[task] || 0) +1
    
    const maxHeap = new Heap((a,b) => !b ? a : b[0] - a[0])
    Object.keys(freqMap).forEach((char) => {
     maxHeap.add([freqMap[char], char]);
    });
    
    let intervalCount = 0
    while (maxHeap.length() > 0) {
        const waitList = [];
        let k = n + 1; 
        while (k > 0 && maxHeap.length() > 0) {
          intervalCount++;
          const [frequency, char] = maxHeap.poll();
          if (frequency > 1) {
            waitList.push([frequency - 1, char]);
          }
          k -= 1;
        }

        
        waitList.forEach(task => maxHeap.add(task));


        if (maxHeap.length() > 0) {
          intervalCount += k; 
        }
  }

  return intervalCount;
};
