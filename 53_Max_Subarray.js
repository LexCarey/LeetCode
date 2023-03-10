// Slow answer o(n^2)

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let largestSum = nums[0]
    let currentSum
    for (let i = 0; i<nums.length; i++) {
        currentSum = nums[i]
        if (currentSum>largestSum) {
                largestSum = currentSum
            }
        for (let j = i+1; j<nums.length; j++) {
            currentSum = currentSum + nums[j]
            if (currentSum>largestSum) {
                largestSum = currentSum
            }
        }
    }
    return largestSum
};