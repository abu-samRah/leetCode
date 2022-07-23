/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const end = nums.length
    const queue = [0]
    const visited = new Array(end).fill(0)
    if(nums.length<=1) return true
    while(queue.length){
        const curr = queue.shift()
        let counter = nums[curr]
        while(counter > 0){
            const next = curr+counter
            if(next >= end-1) return true
            if(!visited[next]) {
                queue.push(next)
                visited[next] = 1
            } 
            counter--
        }   
    }
    
    return false
};