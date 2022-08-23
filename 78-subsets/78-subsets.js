/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const subSets = []
    subSets.push([])
    
    for(let i=0; i<nums.length; i++){
        const curr = nums[i]
        const len = subSets.length
        for(let j=0; j<len; j++){
            subSets.push([...subSets[j],nums[i]])
        }
    }
    return subSets
};