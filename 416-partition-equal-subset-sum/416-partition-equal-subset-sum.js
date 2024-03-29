/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) sum += num[i];

  // if 'sum' is a an odd number, we can't have two subsets with equal sum
  if (sum % 2 !== 0) return false;

  const dp = [];
  return canPartitionRecursive(dp, num, sum / 2, 0);
};

function canPartitionRecursive(dp, num, sum, currentIndex) {
  // base check
  if (sum === 0) return true;

  if (num.length === 0 || currentIndex >= num.length) return false;

  dp[currentIndex] = dp[currentIndex] || [];
  // if we have not already processed a similar problem
  if (typeof dp[currentIndex][sum] === 'undefined') {
    // recursive call after choosing the number at the currentIndex
    // if the number at currentIndex exceeds the sum, we shouldn't process this
    if (num[currentIndex] <= sum) {
      if (canPartitionRecursive(dp, num, sum - num[currentIndex], currentIndex + 1)) {
        dp[currentIndex][sum] = true;
        return true;
      }
    }

    // recursive call after excluding the number at the currentIndex
    dp[currentIndex][sum] = canPartitionRecursive(dp, num, sum, currentIndex + 1);
  }
  return dp[currentIndex][sum];
}