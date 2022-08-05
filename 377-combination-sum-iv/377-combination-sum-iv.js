var combinationSum4 = function(nums, target) {
    const n = nums.length;
    const memo = {};
    
    function getCombinations(target) {
        if (target === 0) return 1;
        if (!isNaN(memo[target])) return memo[target]
        let count = 0;
        
        for (let i = 0; i < n; i++) {
            const num = nums[i];
            if (num <= target) {
                const amountLeft = target - num;
                count += getCombinations(amountLeft);
            }
        }
        
        memo[target]  = count;
        return count;
    }
     return getCombinations(target);
};