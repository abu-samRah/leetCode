/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
    const row = heights.length;
    const col = heights[0].length;

   const differences = [];
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (!differences[i]) {
                differences[i] = [Infinity];
            } else {
                differences[i].push(Infinity);
            }
        }
    }

    differences[0][0] = 0
    
    const maxHeap = new PriorityQueue((a, b) => a[1] < b[1]);
    
    maxHeap.push([[0,0], 0]);
    
    while (!maxHeap.isEmpty()) {
        // pop
        const [ square, difference ] = maxHeap.pop();
        const [x , y] = square
        
        //check nieghbours
        const dx = [1,-1,0,0]
        const dy = [0,0,1,-1]
        for (let i=0; i<4; i++) {
            const newX = x + dx[i];
            const newY = y + dy[i];
            if (check(newX , newY,heights)) {
                const currentDiff = Math.abs(heights[newX][newY] - heights[x][y]);
                const maxDiff = Math.max(currentDiff, differences[x][y]);
                
                if (differences[newX][newY] > maxDiff) {
                    differences[newX][newY] = maxDiff;
                    maxHeap.push([[newX, newY], maxDiff]);
                } 
            }
        }
           
    }
    
    return differences[row - 1][col - 1];
};

const check = (row,col,grid) => row>=0 && col >=0 && row<grid.length && col< grid[0].length 

const top = 0;
const parent = i => ((i + 1) >>> 1) - 1;
const left = i => (i << 1) + 1;
const right = i => (i + 1) << 1;

class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }
  size() {
    return this._heap.length;
  }
  isEmpty() {
    return this.size() == 0;
  }
  peek() {
    return this._heap[top];
  }
  push(...values) {
    values.forEach(value => {
      this._heap.push(value);
      this._siftUp();
    });
    return this.size();
  }
  pop() {
    const poppedValue = this.peek();
    const bottom = this.size() - 1;
    if (bottom > top) {
      this._swap(top, bottom);
    }
    this._heap.pop();
    this._siftDown();
    return poppedValue;
  }
  replace(value) {
    const replacedValue = this.peek();
    this._heap[top] = value;
    this._siftDown();
    return replacedValue;
  }
  _greater(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }
  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }
  _siftUp() {
    let node = this.size() - 1;
    while (node > top && this._greater(node, parent(node))) {
      this._swap(node, parent(node));
      node = parent(node);
    }
  }
  _siftDown() {
    let node = top;
    while (
      (left(node) < this.size() && this._greater(left(node), node)) ||
      (right(node) < this.size() && this._greater(right(node), node))
    ) {
      let maxChild = (right(node) < this.size() && this._greater(right(node), left(node))) ? right(node) : left(node);
      this._swap(node, maxChild);
      node = maxChild;
    }
  }
}
