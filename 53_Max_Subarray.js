// Fast Answer Using Kadane's Method O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentMax = nums[0]
    let overallMax = nums[0]
    for (let i=1; i<nums.length; i++) {
        if (nums[i] > currentMax + nums[i]) {
            currentMax = nums[i]
        } else {
            currentMax = currentMax + nums[i]
        }
        if (currentMax > overallMax) {
            overallMax = currentMax
        }
    }
    return overallMax
};