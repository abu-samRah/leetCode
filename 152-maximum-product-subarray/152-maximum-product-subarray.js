/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = Math.max(...nums)
    let currMin = 1
    let currMax = 1
    
    for(let i=0; i<nums.length; i++){
        if(nums[i] === 0){
           currMin = 1
           currMax = 1
            continue
        }
        
        const tmp = currMax * nums[i]
        currMax = Math.max(tmp, currMin * nums[i], nums[i])
        currMin = Math.min(tmp, currMin * nums[i], nums[i])
        
        max = Math.max(max, currMax)
    }
    
    return max
};