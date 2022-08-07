/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let max = Number.NEGATIVE_INFINITY
    let sum = 0
    let startWindow = 0
    for(let endWindow=0; endWindow< nums.length; endWindow++){
        sum += nums[endWindow]
        if(endWindow >= k-1){
            max = Math.max(max, sum/k)
            sum -= nums[startWindow++]
        }
        
    }
    return max
};