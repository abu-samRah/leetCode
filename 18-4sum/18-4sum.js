/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(arr, target) {
  arr.sort((a, b) => a - b);
  const triplets = [];
  for (let i = 0; i < arr.length - 3; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    search_pair(arr, arr[i], i + 1, triplets,target);
  }

  return triplets;
}


function search_pair(arr, num, index, triplets,target) {
  
  for(let i = index; i < arr.length -2; i++){
      
      if (i > index && arr[i] === arr[i - 1] )  { 
      continue;
    }
      let sum = num + arr[i]
      let right = arr.length - 1;
      let left = i+1;
      //console.log({sum})
    while (left < right) {
    const current_sum = sum + arr[left] + arr[right];
        //console.log({index,i,left,right,current_sum,target})
    if (current_sum === target) { 
      triplets.push([num, arr[i],arr[left], arr[right]]);
      left += 1;
      right -= 1;
      while ( arr[left] === arr[left - 1]) {
        left += 1; 
      }
      while ( arr[right] === arr[right + 1]) {
        right -= 1;
      }
    } else if (target > current_sum) {
      left += 1; 
    } else {
      right -= 1; 
    }
  }
      
  }
}