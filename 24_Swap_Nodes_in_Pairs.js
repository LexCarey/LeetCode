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
var swapPairs = function(head) {
    //If we have no head or we have no head.next then we do not have enough nodes to make a swap, so we return.
    if (!head || !head.next) {
        return head
    }
    //Create our 3 runners.
    let runner1 = head, runner2 = runner1.next, runner3 = runner2.next
    //Our first swap starts by changing our head.
    head = head.next
    //This loop must continue until something is found out halfway through the loop. Thats why I chose to make an infinitely looping while loop by making the condition "true".
    while (true) {
        //Direct our first node to face where our second node is facing, swap our second node to face our first node.
        runner1.next = runner2.next
        runner2.next = runner1
        //This checks if we still have more than 1 node left, if we do, we start setting our runners up for another run through the loop to continue swapping.
        if (runner3 && runner3.next) {
            runner2 = runner3.next
            runner1.next = runner2
            runner1 = runner3
            if (runner2.next) {
                runner3 = runner2.next
            }
            //If we don't have anymore swaps to make, we are all done!
        } else {
            return head
        }
    }
};