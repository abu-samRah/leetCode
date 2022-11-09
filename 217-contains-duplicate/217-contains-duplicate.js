/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const myMap = {}
    for(let i =0; i< nums.length ; i++){
        if(myMap[nums[i]]){
            return true
        }
        myMap[nums[i]] = 1
    }
    return false
};

/*
const uniqueSet = new Set(nums);
   return uniqueSet.size !== nums.length;*/