/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function(nums) {
    let minMax = nums[0], sum = nums[0], i = 1
    while (i < nums.length) {
        sum += nums[i++]
        minMax = Math.max(minMax, Math.ceil(sum / i))
    }
    return minMax;
};