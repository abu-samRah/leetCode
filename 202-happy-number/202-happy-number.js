/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function(n) {
    let seen = {};
    while (n !== 1 && !seen[n]) {
        seen[n] = true;
        n = sumOfSquares(n);
    }
    return n === 1 ? true : false;
};
function sumOfSquares(num) {
    let sum = 0;
    while ((num > 0)) {
        const digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }
    return sum;
}