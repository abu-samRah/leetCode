/**
 * @param {number[][]} rooms
 * @return {boolean}
 */

class MyQueue extends Map {
  constructor() {
    super();
    this.insertionIndex = 0;
    this.removalIndex = 0;
  }

  enqueue(element) {
    this.set(this.insertionIndex, element);
    this.insertionIndex++;
  }

  dequeue() {
    const el = this.get(this.removalIndex);
    if (typeof el !== 'undefined') {
      this.delete(this.removalIndex);
      this.removalIndex++;
    }
    return el;
  }
    
  size(){
      return this.insertionIndex === this.removalIndex
  }
}

var canVisitAllRooms = function(rooms) {
    const map = new Map()
    const queue = new MyQueue()
    queue.enqueue(rooms[0])
    map.set(0,true)
    while(!queue.size()){
        const nodes = queue.dequeue()
        for(let i=0; i<nodes.length; i++){
            if(!map.get(nodes[i])){
                map.set(nodes[i], true)
                queue.enqueue(rooms[nodes[i]])
            }
        }
    }
    return map.size === rooms.length 
};