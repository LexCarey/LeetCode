/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let result = 0, runner = head, arr = []
    while (runner) {
        arr.push(runner.val)
        runner = runner.next
    }
    let left = 0; right = arr.length-1
    while (left<right) {
        if (arr[left] +arr[right] > result) {
            result = arr[left] + arr[right]
        }
        left++
        right--
    }
    return result
};