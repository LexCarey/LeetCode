/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
    var removeNthFromEnd = function(head, n) {
    let counter = n;
    let ahead = head
    let behind = head
    while (counter>0) {
        if (ahead.next) {
            ahead = ahead.next
            counter --
        } else{
            break
        }
    }
    while (ahead.next) {
        ahead = ahead.next
        behind = behind.next
    }
    if (counter>0) {
        head = head.next 
    } else if (behind.next) {
        behind.next = behind.next.next
    }
    return head
    
};