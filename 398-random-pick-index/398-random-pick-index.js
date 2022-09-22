/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums;
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    let count = 0;
        let picked = 0;
        
        this.nums.forEach((num, idx) => {
            if(num === target) {
                ++count;
                const probOfPicked = Math.floor(Math.random() * count);
				
				// probOfPicked value can be an int within the range [0, count)
				// so probability of it being (count - 1) is 1/count
				// since we have to chose each index uniformly in a random fashion
                if(probOfPicked === (count - 1)) {
                    picked = idx;
                }
            }
        })
        return picked;
    }

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */