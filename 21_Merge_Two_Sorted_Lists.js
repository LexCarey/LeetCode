/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
    var mergeTwoLists = function(list1, list2) {
    let resultList = new ListNode()
    let head = resultList
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            resultList.next = new ListNode(list1.val)
            list1 = list1.next
        } else {
            resultList.next = new ListNode(list2.val)
            list2 = list2.next
        }
        resultList = resultList.next
    }
    if (list1) {
        resultList.next = list1
    }
    if (list2) {
        resultList.next = list2
    }
    return head.next
};