/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(arr) {
    let start = 0
  let end = arr.length -1
  
  while(start<=end){
    let mid = start + Math.floor((end-start)/2)
    if (mid < end && arr[mid] > arr[mid + 1]) return arr[mid + 1];
    if (mid > start && arr[mid - 1] > arr[mid]) return arr[mid];
    if(arr[start] > arr[mid]) end = mid -1
    else start = mid +1
    }

  return arr[0]
};