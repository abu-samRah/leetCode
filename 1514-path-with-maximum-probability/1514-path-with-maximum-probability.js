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
    
    const maxHeap = new PriorityQueue((a, b) => a[1] > b[1]);
    
    maxHeap.push([ start, 1 ]);
    
    while (!maxHeap.isEmpty()) {
        // pop
        const [ node, prob ] = maxHeap.pop();
        //check goal
        if (isGoal(node, end)) return prob;
        
        //check pass
        if (dists[node] > prob) continue;
        
        //check nieghbours
        for (const [nei, weight] of adjList[node]) {
            if (check(prob, weight, dists, nei)) {
                dists[nei] = prob * weight;
                maxHeap.push([nei, dists[nei]]);
            }
        }
           
    }
    
    return 0;
};

const isGoal = (node, end) => node === end

const check = (prob, weight, dists,nei) => prob * weight > dists[nei]


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
