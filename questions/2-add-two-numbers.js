// https://leetcode.com/problems/add-two-numbers/description/
export const addTwoNumbers = (l1, l2) => {
	// create a new linked list to store the sums
	let sums = new ListNode();
	// set `curr` to the head of the new linked list for traversal
	let curr = sums;

	// initialize a new variable to keep track if the sum is greater than 9
	//      each number in the nodes must be a single digit number
	let carryOver = 0;

	// while `l1`, `l2`, or `carryOver` have valid values
	//      `l1` and `l2` may be linked lists of differeing lengths
	//      maybe loop has already gone through all of the nodes in both lists, but the last two nodes resulted in >9, so a new digit must be appended
	while (l1 || l2 || carryOver) {
		// set the values of lists 1 and 2
		//      but if either lists are `null` (reached the end of the list), default to 0
		const val1 = l1 ? l1.val : 0;
		const val2 = l2 ? l2.val : 0;

		// calculate the sum of the values of lists 1, 2, and the `carryOver`
		let sum = val1 + val2 + carryOver;
		// calculate a new carryOver
		//      ex: `4 + 6` will carry over 1, but if the next two numbers are `7 + 2`, then there is a new cascading carry over
		carryOver = sum > 9 ? 1 : 0;

		// Set the next value of `sums` linked list to a new node with the value set to `sum % 10`
		//      since x should be less than 10, `x % 10` will result either `x` or `x - 10`
		//      could also just use `sum - 10`
		curr.next = new ListNode(sum % 10);

		// depending on if either lists are at their end (`null`), update them to be their next node or `null`
		l1 = l1 ? l1.next : null;
		l2 = l2 ? l2.next : null;

		curr = curr.next;
	}

	// return `sums.next` as the first node will be a null value from its initialization
	return sums.next;
};
