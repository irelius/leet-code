// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
export const removeNthNodeFromEndOfList = (head, n) => {
	// set `length` counter to count how long the linked list is
	let length = 0;
	// set a new `copy` linked list to avoid messing with what the actual head is
	let copy = head;
	while (copy) {
		// increment `length` and adjust `copy` to be the next node to continue traversing through linked list
		length++;
		copy = copy.next;
	}

	// set `prev` variable to keep track of the previous node
	let prev = null;
	// set `nodeToRemove` variable to identify the current node loop will be on
	let nodeToRemove = head;

	// while `length - n` is greater than zero
	//      Will calculate to the index of the nth node from the end of the list
	while (length - n > 0) {
		// set `prev` to the current node
		prev = nodeToRemove;

		// set `nodeToRemove` (the current node) to the next node to enable traversal until the nth node from the end of the list
		nodeToRemove = nodeToRemove.next;

		// decrement `length`
		length--;
	}

	// if `prev` is null, then the node to remove was the beginning of the list
	if (prev === null) {
		// set the `head` to the next node, identifies the next node as the new start of the list
		head = nodeToRemove.next;

		// change the pointer of the node to remove to null, breaks connection to the rest of the list
		nodeToRemove.next = null;

		// could technically just run `return nodeToRemove.next`
	}
	// otherwise, the node to remove is somewhere in the middle/end of the list
	else {
        // set `prev` to point to the `nodeToRemove`'s next node
		prev.next = nodeToRemove.next;
        // update `nodeToRemove` to point to nothing, breaks connection to the rest of the list
        nodeToRemove.next = null
	}

	return head;
};
