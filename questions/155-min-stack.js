export default class MinStack {
	constructor() {
		// Property of class to keep track of the stack
		this.stack = [];

		// Property of class to keep track of the minimum value of the stack at each level of the stack
		this.minStack = [];
	}

	push(val) {
		// Push into stack the value
		this.stack.push(val);

		// If the `minStack` doesn't have any value
		if (this.minStack.length === 0) {
			// Push the current value into `minStack`
			//      By default the current value is the new minimum value
			this.minStack.push(val);
		} else {
			// Otherwise, push into `minStack` the smaller of the current value or the current last element in the `minStack`
			//      If the new value is smaller, then it will be at the end of `minStack` the next time it is referenced
			//      If it's not smaller, then the previous smaller value will be pushed into `minStack` again
			this.minStack.push(Math.min(val, this.minStack[this.minStack.length - 1]));
		}
	}

	pop() {
        // Remove the top element of both stacks
		this.stack.pop();
		this.minStack.pop();
	}

	top() {
        // Return the last element in the stack
		return this.stack[this.stack.length - 1];
	}

	getMin() {
        // Return the last element in the minStack
		return this.minStack[this.minStack.length - 1];
	}
}
