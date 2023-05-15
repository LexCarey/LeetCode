/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let firstStop = head, ahead = head, behind = head, temp
    for(let i = 0; i<k-1; i++) {
        firstStop = firstStop.next
    }
    ahead = firstStop
    while(ahead.next) {
        ahead = ahead.next
        behind = behind.next
    }
    console.log(firstStop.val)
    console.log(behind.val)
    temp = behind.val
    behind.val = firstStop.val
    firstStop.val = temp
    return head
};