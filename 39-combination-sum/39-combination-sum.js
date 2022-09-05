/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
   
    const getCombinations = (sum,out,val) =>{
        if(sum === target ) {
            out.push(val)
            return
        }
        if(sum>target) return
        
        for(let i=0; i<candidates.length;i++)
            if(!val.length || candidates[i]>=val[val.length-1])
                getCombinations(sum+candidates[i], out , [...val,candidates[i]])
           
        return out
    }
    return getCombinations(0,[],[])
    
};
