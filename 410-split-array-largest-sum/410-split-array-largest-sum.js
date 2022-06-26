/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
    let low = Math.max(...nums);
    let high = nums.reduce((a,b) => a + b , 0);

    while(low < high) {
        let mid = Math.floor(low + (high - low) / 2); 
        if(isPossible(nums, mid, m)) high = mid;  
        else low = mid + 1;
    }
    return high;
};

function isPossible(arr, mid, noOfParts) {
    let part = 1;
    let sum = 0;
    
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
        
        if(sum > mid) {
            part++;
            sum = arr[i];
        }
    }
    return part <= noOfParts; 
}