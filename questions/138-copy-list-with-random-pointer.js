// https://leetcode.com/problems/copy-list-with-random-pointer/description/
export const copyListWithRandomPointer = (head) => {
	// generate a new Map
	//      different from regular hash map because the keys of a Map doesn't get convereted into a string
	//      can use variables/objects as key names
	const ref = new Map();

	// set default `null` key to the value of `null`
	ref.set(null, null);

	// Set `curr` as copy pointer to head
	let curr = head;
	// go through the linked list using `curr`
	while (curr) {
		// generate a new node that defaults to the `curr` node value
		const newNode = new Node(curr.val);

		// use `.set()` to set a new key and value in the `ref` Map
		//      `curr` will get stored as the complex node object instead of being converted to "[object Object]"
		//      `newNode` will be the node object
		ref.set(curr, newNode);

		curr = curr.next;
	}

	// reset `curr` back to the head to traverse through linked list again
	curr = head;
	while (curr) {
		// get `curr`'s copied node from the `ref` map
		const currNode = ref.get(curr);

		// get copied nodes from the `ref` map of the `curr`'s `next` and `random` nodes
		// then set `currNode`'s properties to those nodes
		//      basically, use the `curr` node to reference the copied nodes, and using `next` and `random`, set the pointers from copied nodes to other copied nodes
		currNode.next = ref.get(curr.next);
		currNode.random = ref.get(curr.random);

		curr = curr.next;
	}

	// return the `head`'s copied node from the `ref` map
	return ref.get(head);
};
