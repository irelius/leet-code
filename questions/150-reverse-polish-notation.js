// https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
export const reversePolishNotation = (tokens) => {
	// Create a stack to keep track of the last 2 integers to perform an operation on
	const stack = [];

	// Create a set to keep track of the 4 types of operations, just for reference
	const operations = new Set(["+", "-", "/", "*"]);

	// Go through each tocken
	for (let i = 0; i < tokens.length; i++) {
		// Set the current token for reference
		const curr = tokens[i];

		// If the `operations` set doesn't have the current token, it should be an integer
		if (!operations.has(curr)) {
			// Push the current integer into the stack for later operations
			stack.push(curr);
		}
		// Otherwise, current token is a valid operation
		else {
			// Pop the top of the integer stack as `b`, returns the "last" element in the stack
            //      Convert to integer to perform operations
			const b = Number(stack.pop());
			// Pop the top of the integer stack as `a`, returns the "second to last" element in the stack
            //      Convert to integer to perform operations
			const a = Number(stack.pop());

			// !!! Order of `b` and `a` matters

			// If the current token is "+"
			if (curr === "+") {
				// Push into the `stack` the value of a + b
				stack.push(a + b);
			}
			// if the current token is "-"
			else if (curr === "-") {
				// Push into the `stack` the value of a - b
				stack.push(a - b);
			}
			// if the current token is "/"
			else if (curr === "/") {
				// Push into the `stack` the value of a / b
				//      Use `Math.trunc` to remove decimals
				stack.push(Math.trunc(a / b));
			}
			// if the current token is "*"
			else if (curr === "*") {
				// Push into the `stack` the value of a * b
				stack.push(a * b);
			}
		}
	}

    // Return the only element in the stack, converted to a integer
	return Number(stack[0]);
};
