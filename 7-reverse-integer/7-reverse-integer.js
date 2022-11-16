/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const isNegative = x < 0;
  x = Math.abs(x);
  let res = 0;
  while (x > 0) {
    const num = x % 10;
    x = Math.floor(x / 10);
    res *= 10;
    res += num;
  }
  if (res > Math.pow(2,31)) return 0;
  return isNegative ? res * -1 : res;
};