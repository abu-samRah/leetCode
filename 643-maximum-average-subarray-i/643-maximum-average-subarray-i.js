/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let max = Number.NEGATIVE_INFINITY
    let sum = 0
    for(let i=0; i< nums.length+1; i++){
        if(i < k) {
            sum += nums[i]
        }else if(i >= k){
            max = Math.max(max, sum/k)
            sum -= nums[i-k]
            sum += nums[i]
        }
        //console.log(i , sum)
    }
    return max
};