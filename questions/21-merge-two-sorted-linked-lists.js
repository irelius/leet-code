// https://leetcode.com/problems/merge-two-sorted-lists/?envType=problem-list-v2&envId=linked-list

// class of ListNode
//      `val` property is the value of the node
//      `next` property is the pointer to next ListNode
class ListNode {
	constructor(val, next) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

export const mergeTwoSortedLinkedLists = (list1, list2) => {
	// construct a new ListNode to start the merged list
	const merged = new ListNode();

	// set `curr` to the head of `merged`, the newly generated linked list
	//      represents the current node of the linked list
	let curr = merged;

	// While `list1` and `list2` are valid (they are nodes)
	while (list1 && list2) {
		// compare values of the current `list1` and `list2` nodes
		// if `list1` has the smaller value
		if (list1.val < list2.val) {
			// set `curr`'s next pointer to `list1`
			curr.next = list1;

			// update `list1` to be its next node
			list1 = list1.next;
		}
		// otherwise, `list2` has the smaller (or equal) value
		else {
			// set `curr`'s next pointer to `list2`
			curr.next = list2;

			// update `list2` to be its next node
			list2 = list2.next;
		}

		// change `curr` to be its next node to be able to build out the linked list
		curr = curr.next;
	}

	// if `list1` or `list2` is longer than the other, then one will be `null` and the other will still have more nodes
	//      set `curr`'s next pointer to be the head of the list that still has more nodes
	//      basically attaches the remaining of the linked list to the end of `curr`
	curr.next = list1 || list2;

	// return `merged.next` because the head value of `merged` is 0
	//      default value when initializing `merged` at the top
	return merged.next;
};
