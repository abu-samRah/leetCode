/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let minLength = Infinity
    let sum = 0
    
    let startWindow = 0
    for(let endWindow=0; endWindow<nums.length; endWindow++){
        sum+= nums[endWindow]
        while(sum>=target){
            minLength = Math.min(minLength,endWindow-startWindow+1)
            sum -= nums[startWindow++]
        }
        //console.log({sum,startWindow,endWindow,minLength})
    }
    
    return minLength === Infinity ? 0 : minLength
};