var combinationSum4 = function(nums, target) {
    const n = nums.length;
    const memo = {};
    function getCombinations(curr) {
        if(curr > target ) return 0
        if (target === curr) return 1;
        if (!isNaN(memo[curr])) return memo[curr]
        
        let count = 0;
        for (let i = 0; i < n; i++) {
            const num = nums[i];
            if (num <= target) {
                const next = curr + num;
                count += getCombinations(next);
            }
        }
        
        memo[curr]  = count;
        return count;
    }
    const res = getCombinations(0);
     return res
};