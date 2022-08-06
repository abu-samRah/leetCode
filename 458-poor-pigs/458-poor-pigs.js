/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
      let answer = 1;
      let n = Math.floor(minutesToTest / minutesToDie);
      n += 1; 
      return Math.ceil(Math.log(buckets) / Math.log(n));
};