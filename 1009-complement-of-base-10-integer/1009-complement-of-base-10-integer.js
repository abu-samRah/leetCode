/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(num) {
    if(num === 0 )return 1
  let bit_count = 0;
  let n = num;
  while (n > 0) {
    bit_count++;
    n = n >> 1;
  }

  let all_bits_set = Math.pow(2, bit_count) - 1;

  return num ^ all_bits_set;
};