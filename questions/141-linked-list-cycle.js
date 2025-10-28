// https://leetcode.com/problems/linked-list-cycle/description/

import { convertLinkedListToArray, makeLinkedList } from "../../helper/linkedList";

export default hasCycle = function (head) {
	// set two pointers
	//      `fast` will go through linked list by 2
	//      `slow` will go through linked list by 1
	let fast = head;
	let slow = head;

	// if there is a loop in the linked list, then `fast` will eventually overlap `slow` and land on the same node later down the road

	// while `fast` and `fast.next` are valid values (truthy)
	//      ex: 1 -> 2 -> 3 -> null
	//          1)
	//              fast = 1
	//              fast.next = 2
	//          2)
	//              fast = 3
	//              fast.next = `null`
	//      ex: 1 -> 2 -> null
	//          1)
	//              fast = 1
	//              fast.next = 2
	//          2)
	//              fast = `null`
	//              fast.next = error, but condition will already fail due to `fast` being `null
	while (fast && fast.next) {
		// advance `fast` by 2
		fast = fast.next.next;

		// advance `slow` by 1
		slow = slow.next;

		// if `fast` and `slow` point to the same node, then there was a loop at some point
		if (fast === slow) return true;
	}

	// if `fast` or `fast.next` are `null`, then the linked list doesn't have a loop
	return false;
};
