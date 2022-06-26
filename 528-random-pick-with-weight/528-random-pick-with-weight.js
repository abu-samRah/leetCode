/**
 * @param {number[]} w
 */
var Solution = function(w) {
  this.weights =[]
  this.sum=0;
  for (let i=0; i<w.length; i++) {
    this.sum += w[i];
    this.weights.push(this.sum)
  }
};

Solution.prototype.pickIndex = function() {
    
  let index = Math.floor(Math.random() * this.sum);
    
    let start = 0, end = this.weights.length - 1
    
    while(start < end){
        let mid = Math.floor((start + end) / 2)
        if(index < this.weights[mid]) end = mid 
        else start = mid + 1
    }
    
    return end
};