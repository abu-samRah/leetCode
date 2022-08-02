/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let lo = matrix[0][0], hi = matrix[matrix.length-1][matrix[0].length-1] 
    while (lo < hi) {
        let mid = lo + Math.floor((hi-lo)/2);
        let count = 0;
        for (let i = 0;i<matrix.length;i++) {
            for (let j=0;j<matrix.length;j++) {
                if (matrix[i][j] <= mid) count++;
                else break;
            }
        }
        if (count < k) lo = mid+1;
        else hi = mid;
    }
    return lo
};



/*
 low = 1 , high = 16 , mid = 1 + 7  = 8    =>   count = 2 
 low = 9 , high = 16 , mid = 9 + 3  = 11   =>   count = 4 
 low = 12, high = 16 , mid = 12 + 2 = 14   =>   count = 8
 low = 12, high = 14 , mid = 12 + 1 = 13   =>   count = 8
 low = 12, high = 13 , mid = 12 + 0 = 12   =>   count = 5
 low = 13, high = 13 
 
 low = 13
*/
