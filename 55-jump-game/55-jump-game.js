/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const start = 0
    const end = nums.length -1
    const queue = [start]
    let currLen = queue.length, i=0
    const visited = {start : true}
    
    while(i<currLen){
        const curr = queue.shift()
        if(curr === end) return true
        
        let counter = nums[curr]
        while(counter > 0){
            const next = curr+counter
            next <= end && !visited[next] && queue.push(next)
            visited[next] = true
            counter--
        }
        
        i++
        
        if(i>=currLen){
            i =0
            currLen = queue.length
        }
    }
    
    return false
};