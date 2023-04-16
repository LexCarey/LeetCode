/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let i=0, j=0, nums3=[]
    while(i<nums1.length || j<nums2.length) {
        if (i<nums1.length && j<nums2.length){
            if (nums1[i]<=nums2[j]) {
                nums3.push(nums1[i])
                i++
            } else {
                nums3.push(nums2[j])
                j++
            }
        } else if (i<nums1.length) {
            nums3.push(nums1[i])
            i++
        } else {
            nums3.push(nums2[j])
            j++
        }
    }
    console.log(nums3)
    middle = nums3.length / 2
    console.log(middle)
    if (middle % 1 === 0) {
        return ((nums3[middle-1] + nums3[middle]) / 2)
    } else {
        return nums3[Math.floor(middle)]
    }
};