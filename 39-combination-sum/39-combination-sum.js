/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = []
    const getCombinations = (sum,index,val) =>{
        if(sum === target ) {
            res.push([...val])
            return
        }
        if(index >= candidates.length || sum > target) return
        
        val.push(candidates[index])
        getCombinations(sum+candidates[index], index, val)
        val.pop()
        getCombinations(sum, index+1 , val)
           
    }
    
    getCombinations(0,0,[])
    return res
};
