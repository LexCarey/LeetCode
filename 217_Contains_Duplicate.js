/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let dupeSet = new Set()
    for (let n in nums) {
        if (!dupeSet.has(nums[n])) dupeSet.add(nums[n])
        else return true
    }
    return false
};