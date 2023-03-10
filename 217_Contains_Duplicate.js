/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = new Map()
    for (i in nums) {
        if (map.get(nums[i])) {
            return true
        } else {
            map.set(nums[i], 1)
        }
    }
    return false
};