// https://leetcode.com/problems/linked-list-cycle/description/

import { convertLinkedListToArray, makeLinkedList } from "../helper/linkedList";

const hasCycle = function (head) {
    if (head === null) {
        return false
    }

    let pointer1 = head
    let pointer2 = head

    while (pointer1.next !== null && pointer2.next.next !== null) {
        if (pointer1.val === pointer2.val) {
            return true
        } else {
            pointer1 = pointer1.next
            pointer2 = pointer2.next.next
        }
    }
    return false
};
