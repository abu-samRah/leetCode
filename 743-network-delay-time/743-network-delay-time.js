const networkDelayTime = function (times, n, k) {
  //  create adj list    
  let adj = new Array(n+1).fill(0).map(() => []);
  for ([curr, next, time] of times) {
    adj[curr].push({ time: time, node: next });
  }
  // 
  let signalReceivedAt = new Array(n + 1).fill(Infinity);
    
  dijkstra(signalReceivedAt, k, n, adj);

  let ans = 0;

  for (let i = 1; i <= n; ++i) {
    ans = Math.max(ans, signalReceivedAt[i]);
  }
  return ans === Infinity ? -1 : ans;
};

const dijkstra = (signalReceivedAt, k, n, adj) => {
  // priority queue
  let pq = new PriorityQueue((a, b) => a.priority > b.priority);
  // start from 0 and source k
  signalReceivedAt[k] = 0;
  pq.push({element:k, priority:0});


  while (!pq.isEmpty()) {
    let minNode = pq.pop();
    let currNode = minNode.element;
    let currNodeTime = minNode.priority;
      
    if (currNodeTime > signalReceivedAt[currNode]) continue;
    if (!adj[currNode]) continue;

    for (let neigh of adj[currNode]) {
        
      let time = neigh.time;
      let nextNode = neigh.node;
      let temp = currNodeTime + time;

      if (signalReceivedAt[nextNode] > temp) {
        signalReceivedAt[nextNode] = temp;
        pq.push({element:nextNode, priority:signalReceivedAt[nextNode]});
      }
    }
  }
    
}

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