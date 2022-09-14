/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const prems = []
  const queue = [[]]

  for(let i=0; i<nums.length; i++){
    const currLen = queue.length
    for(let x=0; x<currLen;x++){
      const front = queue.shift()

      for(let j=0; j<front.length +1; j++){
        const newPrem = [...front]
        newPrem.splice(j,0,nums[i])
        if(newPrem.length === nums.length) {
          prems.push(newPrem)
        }else{
          queue.push(newPrem)
        }
      }
      
    }
  }

  return prems;
};