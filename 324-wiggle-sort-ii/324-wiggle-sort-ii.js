/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const wiggleSort = (nums) => {
    nums.sort((a , b) => a - b);
    const tmp = [...nums];
    let low = Math.floor((nums.length - 1)/2);
    let high = nums.length -1;
    for(let i = 0; i < nums.length; i++) {
        if(i % 2 === 0) {
            nums[i] = tmp[low];
            low--;
        } else {
            nums[i] = tmp[high];
            high--;
        }
    }
    return nums;
};