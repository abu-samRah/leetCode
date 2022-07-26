/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    
    const m = flights.length;
	
    const adjList = {};
    const visited = new Map();
    
    for (let i = 0; i < n; i++) {
        adjList[i] = [];
    }
    
    for (let i = 0; i < m; i++) {
        const [u, v,cost] = flights[i];
        adjList[u].push([v, cost]);
    }
    
    
    const pq = new PriorityQueue((a, b) => a[1] < b[1]);
    
    pq.push([ src, 0 ,k+1 ]);
    
    while (!pq.isEmpty()) {
        // pop
        const [ node, cost,stops ] = pq.pop();
        
        visited.set(node, stops);
        //check goal
        if (isGoal(node, dst)) return cost;
        
        //check pass
        if (stops <= 0) continue;
        
        //check nieghbours
        for (const [nei, weight] of adjList[node]) {
            if (check(stops, visited, nei)) {
                pq.push([nei, cost + weight,stops -1]);
            }
        }
           
    }
    
    return -1;
};

const isGoal = (node, end) => node === end

const check = (stops, visited,nei) => !(visited.has(nei) && visited.get(nei) >= stops-1)


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

/*
const MAX = Number.MAX_SAFE_INTEGER;
    const m = flights.length;
	
    const adjList = {};
    const dists = new Array(n).fill(MAX);
    const visited = new Map();
    
    for (let i = 0; i < n; i++) {
        adjList[i] = [];
    }
    
    for (let i = 0; i < m; i++) {
        const [u, v,cost] = flights[i];
        adjList[u].push([v, cost]);
    }
    
    const pq = new PriorityQueue((a, b) => a[1] < b[1]);
    pq.push([ src, 0 , k+1]);
    
    while (!pq.isEmpty()) {
        // pop
        const [ node, cost ,stops] = pq.pop();
        visited.set(node, stops);
        //check goal
        if (isGoal(node, dst)) return cost;
        
        //check pass
        if (stops <= 0 || !adjList[node]) continue;
        
        //check nieghbours
        for (const [nei, weight] of adjList[node]) {
                 if(visited.has(nei) && visited.get(nei) >= stops-1) continue;
                dists[nei] = cost + weight;
                pq.push([nei, dists[nei],stops-1]);
            
        }
           
    }
    
    return -1;
*/