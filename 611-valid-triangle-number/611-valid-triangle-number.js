/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
    if(nums.length < 3) return 0;
    
    nums.sort((a,b) => a-b)
    let solutions_count = 0;
    
    for(let side_c_index=nums.length-1; side_c_index >= 2; side_c_index--){
        let side_a_index =0;
        let side_b_index = side_c_index-1;

        while(side_a_index < side_b_index){
            if(nums[side_a_index] + nums[side_b_index] > nums[side_c_index]){
                solutions_count += side_b_index - side_a_index;
                side_b_index -= 1
            }
            else {
                side_a_index +=1;
            }
        }
    }

    return solutions_count;
};