/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let runner = 0
    nums1.splice(nums1.length-n, n)
    while (runner<nums1.length || nums2.length>0) {
        while (nums2[0]<=nums1[runner] || runner>=nums1.length) {
            nums1.splice(runner, 0 , nums2.shift())
            console.log(nums1)
        }
        runner++
    }
};