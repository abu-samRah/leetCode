/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const ans = []
    const getAllPossibleComb = (n,k,val) => {
        if(k === 0) {
            ans.push(val)
            return
        }
        for(let i=1;i<=n;i++){
            const length = val.length
            if(!length){
                getAllPossibleComb(n,k-1,[i])
            }
            if(i>val[length-1]){
                getAllPossibleComb(n,k-1,[...val,i])
               }
           
        }
    }
    getAllPossibleComb(n,k,[])
    
    return ans
};