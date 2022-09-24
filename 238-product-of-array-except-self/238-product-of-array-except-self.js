/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
   const output = []
   let prefix = 1
   let suffix = 1

   for(let i=0; i<nums.length; i++){
       output[i] = prefix
       prefix *=  nums[i]
   }

    for(let i=nums.length-1; i>=-1; i--){
       output[i] *= suffix
       suffix *=  nums[i]
   }

    return output
};