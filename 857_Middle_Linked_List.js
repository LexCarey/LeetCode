/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
    var middleNode = function(head) {
    let half = head
    let full = head
    while (full && full.next) {
        full = full.next.next
        half = half.next
    }
    return half
};