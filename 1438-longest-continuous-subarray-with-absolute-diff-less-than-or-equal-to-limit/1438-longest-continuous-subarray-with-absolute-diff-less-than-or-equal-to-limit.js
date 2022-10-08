var longestSubarray = function(nums, limit) {
    let longest = 1;
    let min = nums[0];
    let max = nums[0];
    let k=1;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i]>max) {
          max = nums[i];
          min = max - limit;
          k=1;
          while ((i-k>-1) && nums[i-k]>=max-limit && nums[i-k]<= max) {k++;}
      } else if (nums[i]<min) {
          min = nums[i];
          max = min+limit;
          k=1;
          while ((i-k>-1) && nums[i-k]<=min+limit && nums[i-k]>=min) {k++;}
      } else {
          k++;
      }
    longest = Math.max(k, longest);
    }
   return longest; 
}
