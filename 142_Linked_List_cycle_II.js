/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head || !head.next) {
        return null
    }
    let turtle = head.next
    let rabbit = head.next.next
    while (rabbit && rabbit.next && turtle != rabbit) {
        turtle = turtle.next
        rabbit = rabbit.next.next
    }
    if (turtle != rabbit) {
        return null
    }
    turtle = head
    while (turtle != rabbit) {
        turtle = turtle.next
        rabbit = rabbit.next
    }
    return turtle
};