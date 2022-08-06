var combinationSum4 = function(nums, target) {
    const n = nums.length;
    const memo = {};
    const check = target
    function getCombinations(target) {
        if(target > check) return 0
        if (target === check) return 1;
        if (!isNaN(memo[target])) return memo[target]
        
        let count = 0;
        for (let i = 0; i < n; i++) {
            const num = nums[i];
            if (num <= check) {
                const amountLeft = target + num;
                count += getCombinations(amountLeft);
            }
        }
        
        memo[target]  = count;
        return count;
    }
     return getCombinations(0);
};