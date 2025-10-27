// https://leetcode.com/problems/reverse-linked-list/description/
export const reverseLinkedList = (head) => {
	// set `prev` to function as the node that "new" heads will point to
	//      initialize as `null` as it will be the new tail of the reversed linked list
	let prev = null;

	// while the current `head` is not null
	while (head) {
		// set `temp` variable to hold the current head's next node
		const temp = head.next;

		// change the current head to point to `prev`
		head.next = prev;

		// update `prev` to be the current head
		//      functions as what the next "head" will point to on each loop
		prev = head;

		// updated `head` to be what the original head's next node was
		head = temp;
	}

	return prev;
};

// principle behind reversing linked list:
// Establish...
//      1. `prev` - what the current node is going to point to after reversing; the new pointer node
//      2. `head` - the current node
//      3. `temp` - what was the original next node the `head` was pointing to before the reverse
// Steps:
//      1. store the original next node (`head.next`) in a temporary variable (`temp`)
//      2. change the pointer of the current node (`head.next`) to the previous node (`prev`)
//      3. change the previous node (`prev`) to the current node (`head`)
//      4. change the current node (`head`) to the original next node that is stored in the temporary variable (`temp`)
