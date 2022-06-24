/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if (nums.length === 1 || nums[0] > nums[1]) return 0
    if(nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1
    const binarySearch = (start,end) =>{
            if(start>end) return
            const mid = Math.floor((start+end)/2)
            if(nums[mid] > nums[mid-1] && nums[mid] > nums[mid+1]) return mid
            return binarySearch(start,mid-1) || binarySearch(mid+1,end)
        }
        
    const res = binarySearch(0,nums.length-1)
    return res
};