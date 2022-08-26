/**
 * @param {number} n
 * @return {boolean}
 */
const set = new Set();

const serialize = num => {
  let val = 0;
  while (num >= 1) {
    val += 1 << num % 10;
    num /= 10;
  }
  return val;
};

for (let cur = 1; cur < 10 ** 9; cur <<= 1) {
  set.add(serialize(cur));
}

const reorderedPowerOf2 = (n) => set.has(serialize(n));