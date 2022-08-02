/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const ans = []
    const getAllPossibleComb = (n,k,val) => {
        if(k === 0) {
            //console.log('inside', val)
            ans.push(val)
            return
        }
        for(let i=1;i<=n;i++){
            if(!val.length){
                getAllPossibleComb(n,k-1,[i])
            }
            if(i>val[val.length-1]){
                getAllPossibleComb(n,k-1,[...val,i])
               }
           
        }
    }
    getAllPossibleComb(n,k,[])
    
    return ans
};