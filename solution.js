/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    const sumsArray = []
    sumsArray.push(nums[0])
    
    for(i=1; i<nums.length; i++) {
        sumsArray.push((nums[i]+sumsArray[i-1]))
    }
    
    return sumsArray
};