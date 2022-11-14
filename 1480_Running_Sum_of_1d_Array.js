/**
 * @param {number[]} nums
 * @return {number[]}
 */
    var runningSum = function(nums) {
    let currentRun = 0
    for(let i=0; i<nums.length; i++){
        currentRun = currentRun + nums[i]
        nums[i] = currentRun
    }
    return nums
};