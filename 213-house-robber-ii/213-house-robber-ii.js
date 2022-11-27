/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  
  const arr1 = nums.slice(1)
  const arr2 = nums.slice(0, nums.length-1)
  return Math.max(nums[0],helper(arr1) , helper(arr2))
    
};

const helper = (arr) =>{
    let rob1 =0
    let rob2 =0

    for(let i=0; i<arr.length; i++){
        let tmp = Math.max(arr[i]+rob1, rob2)
        rob1 = rob2
        rob2 = tmp
    }

    return rob2
   }