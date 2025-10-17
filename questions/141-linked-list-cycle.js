// https://leetcode.com/problems/linked-list-cycle/description/

import { convertLinkedListToArray, makeLinkedList } from "../../helper/linkedList";

const hasCycle = function (head) {
    let walk = head
    let fast = head;
    while (fast && fast.next) {
        walk = walk.next;
        fast = fast.next.next;
        if (walk === fast) return true;
    }
    return false;
};
