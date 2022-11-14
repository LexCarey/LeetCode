/**
 * @param {number[]} nums
 * @return {number}
 */
    var pivotIndex = function(nums) {
    let left = 0
    let right = 0
    let leftSum = 0
    let rightSum = 0
    for (let i=0; i<nums.length; i++) {
        if (i>0){
            left = i-1
        } else {
            left=-1
        }
        if (i<nums.length-1) {
            right = i+1
        } else {
            right = nums.length
        }
        while (left>=0) {
            leftSum = leftSum + nums[left]
            left--
        }
        while(right<=nums.length-1) {
            rightSum = rightSum + nums[right]
            right++
        }
        console.log("left = " + leftSum + " right = " + rightSum)
        if(leftSum === rightSum) {
            return i
        }
        leftSum = 0
        rightSum = 0
    }
    return -1
    
};