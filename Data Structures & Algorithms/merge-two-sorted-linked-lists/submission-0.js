/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let temp = null;
        let res = null
        console.log({ temp, list1, list2 })
        if (list1 == null) {
            return list2
        }
        if (list2 == null) {
            return list1
        }
        if (list1.val <= list2.val) {
            temp = list1;
            res = this.mergeTwoLists(list1.next, list2)
            temp.next = res;
        } else {
            temp = list2;
            res = this.mergeTwoLists(list1, list2.next)
            temp.next = res
        }
        return temp
    }
}
