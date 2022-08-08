/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0
    let currOnesMax = 0
    for(let i =0; i<nums.length+1; i++){
        if(nums[i] === 1)  {
            currOnesMax++
        }else{
            max = Math.max(max,currOnesMax)
            currOnesMax = 0
        }
        
    }
     
    return max
};