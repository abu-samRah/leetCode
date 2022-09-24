/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let rob1 =0
    let rob2 =0
    
    for(let i=0; i<nums.length; i++){
        let tmp = Math.max(nums[i]+rob1, rob2)
        rob1 = rob2
        rob2 = tmp
    }
    
    return rob2
};