/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const end = nums.length
    const queue = [0]
    const visited = new Array(end).fill(0)
     let ans = 1
    if(nums.length<=1) return 0
    
    let currLen = queue.length , i = 0
   
    while(i<currLen){
        const curr = queue.shift()
        let counter = nums[curr]
        while(counter > 0){
            const next = curr+counter
            if(next >= end-1) return ans
            if(!visited[next]) {
                queue.push(next)
                visited[next] = 1
            } 
            counter--
        } 
        i++
        
        if(i>=currLen){
            ans++
            currLen = queue.length
            i = 0
        }
    }
    
   
};