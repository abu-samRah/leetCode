/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let i =0 , j=0
    const ans = []
    while(j<nums.length){
        if(Math.abs(nums[j] - nums[j+1]) !== 1) {
            if(i === j) ans.push(`${nums[i]}`)
            else ans.push(`${nums[i]}->${nums[j]}`)
            i = j+1
        }
        j++
    }
    
    return ans
};

/*

[0,1,2,4,5,7] 
           i 
           j
     
 0=>2   4=>5  7
 
 [-4,-2,-1,0,2,3,4,6]
      i
           j
   
   4. 
*/