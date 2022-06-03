/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
    var moveZeroes = function(nums) {
    let i = nums.length
    let counter = 0
    while (i>=0) {
        if (nums[i]===0) {
            nums.splice(i, 1)
            counter++
        }
        if (nums[i]!=0 || i === 0) {
            i--
        }
    }
    while (counter != 0) {
        nums.push(0)
        counter--
    }
    return nums
};

console.log(moveZeroes([0,0]))