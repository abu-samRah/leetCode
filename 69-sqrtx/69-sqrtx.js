/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
    let start = 0;
    let end = x;
    let res = 0;
    while (start < end) {
        res = Math.ceil((start + end)/2); // 1.
        if (res*res <= x && (res + 1)*(res + 1) > x) return res; // 2.
        if (res*res < x) start = res; // 3.
        else end = res; // 4.
    }
    return res;
};