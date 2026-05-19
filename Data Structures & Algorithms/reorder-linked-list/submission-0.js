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
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        if (!head || !head.next) {
            return;
        }

        let fast = head;
        let slow = head;
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }
        let curr = slow
        let prev = null
        let next = null

        while (curr != null) {
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }

        let first = head;
        let second = prev;

        while (second.next) {
            let temp1 = first.next
            let temp2 = second.next
            first.next = second
            second.next = temp1
            first = temp1
            second = temp2
        }
        let list = ""
        let current = head;
        while (current) {
            list += "->" + current.val
            current = current.next
        }
    }
}
