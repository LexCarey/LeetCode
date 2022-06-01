/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target, left=0, right=nums.length) {
    let mid = Math.floor((left+right)/2)

    if (nums[left]===target){
        return left
    }
    if (nums[right]===target){
        return right
    }
    if (left === mid || right === mid) {
        return -1
    }

    if (nums[mid]===target){
        return mid
    } else if (nums[mid]>target) {
        return search(nums, target, left, mid)
    } else {
        return search(nums, target, mid, right)
    }
};

console.log(search([-1,0,3,5,9,12], 9))
console.log(search([-1,0,3,5,9,12], 10))