/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, new_interval) {
    let merged = []
    let i = 0;

  while (i < intervals.length && intervals[i][1] < new_interval[0]) {
    merged.push(intervals[i]);
    i += 1;
  }

  // merge all intervals that overlap with 'new_interval'
  while (i < intervals.length && intervals[i][0] <= new_interval[1]) {
    new_interval[0] = Math.min(intervals[i][0], new_interval[0]);
    new_interval[1] = Math.max(intervals[i][1], new_interval[1]);
    i += 1;
  }

  // insert the new_interval
  merged.push(new_interval);

  // add all the remaining intervals to the output
  while (i < intervals.length) {
    merged.push(intervals[i]);
    i += 1;
  }

  return merged;
};