/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let dupeMap = new Map()
    for (let n in nums) {
        if (!dupeMap.has(nums[n])) dupeMap.set(nums[n])
        else return true
    }
    return false
};