/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let sum = 0, carry = 0, result = new ListNode(0, null), runner = result
    while (l1 || l2) {
        sum = carry
        if (l1) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2) {
            sum += l2.val
            l2 = l2.next
        }
        carry = sum > 9 ? 1:0
        runner.next = new ListNode(sum % 10)
        runner = runner.next
    }
    if (carry>0) runner.next = new ListNode(carry)
    return result.next
};