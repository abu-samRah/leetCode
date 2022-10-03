/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    if (!candidates || candidates.length == 0) return [];
    let res = [];
    candidates.sort((a,b) => a-b);
    var helper = function(curSum, cur, index){
        if (curSum == target){
            res.push([...cur]);
            return;
        }
         if (curSum > target) return;
        
        for(let i = index; i < candidates.length; i++){
            if (i != index && candidates[i] == candidates[i-1]) continue; //already return, go next loop(not recursion)
            helper(curSum+candidates[i], [...cur,candidates[i]], i+1);
        }
    }
    helper(0, [], 0);
    return res;
};