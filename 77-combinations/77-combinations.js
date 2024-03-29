/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let out = comb(k, n);
    // console.log(out);
    return out;
};


function comb(max, n, out=[], curr = [], index = 1){
    if(curr.length===max){
        out.push(curr);
        return [];
    }
    else{
        while(index<=n){
            comb(max, n, out, [...curr, index], ++index);
        }
        return out;
    }
}