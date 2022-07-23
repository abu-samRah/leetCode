/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const end = nums.length
    const queue = [0]
    const visited = new Array(end).fill(0)
    
    if(nums.length<=1) return true
    
    visited[0] = 1
    while(queue.length){
        const curr = queue.shift()
        let counter = 1
        while(counter <= nums[curr]){
            const next = curr+counter
            if(next < end && !visited[next]) {
                if(next === end-1) return true
                queue.push(next)
                visited[next] = 1
            } 
            counter++
        }   
    }
    
    return false
};