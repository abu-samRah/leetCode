/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(arr, key) {
 let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === key) {
      return true;
    }

    // the only difference from the previous solution,
    // if numbers at indexes start, mid, and end are same, we can't choose a side
    // the best we can do, is to skip one number from both ends as key !== arr[mid]
    if (arr[start] === arr[mid] && arr[end] === arr[mid]) {
      start += 1;
      end -= 1;
    } else if (arr[start] <= arr[mid]) { // left side is sorted in ascending order
      if (key >= arr[start] && key < arr[mid]) {
        end = mid - 1;
      } else { // key > arr[mid]
        start = mid + 1;
      }
    } else { // right side is sorted in ascending order
      if (key > arr[mid] && key <= arr[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  // we are not able to find the element in the given array
  return false;
}
