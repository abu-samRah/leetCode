/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a,b)=> a-b)
    const subSets = []
    subSets.push([])
    
    let startIndex = 0
    let endIndex = 0
    
    for(let i=0; i<nums.length; i++){
        const curr = nums[i]
        startIndex = 0
        if(i>0 && nums[i] === nums[i-1]) startIndex = endIndex 
        endIndex = subSets.length
        for(let j=startIndex; j<endIndex; j++){
            subSets.push([...subSets[j],nums[i]])
        }
    }
    return subSets
};