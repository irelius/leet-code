// https://leetcode.com/problems/valid-parentheses/description/
export const validParentheses = (s) => {
	// Create a reference object for each parentheses opening to its respective closing
	const ref = {
		"[": "]",
		"{": "}",
		"(": ")",
	};

	// If `s` is an empty string, it defaults to true
	if (s.length === 0) return true;

	// If the lenght is uneven, then it's false by default because each opening needs a closing
	if (s.length % 2 !== 0) return false;

    // Create a stack to push and pop
	const stack = [];

    // Loop through `s`
	for (let i = 0; i < s.length; i++) {
        // Set `curr` to the current character in the `s` string
		const curr = s[i];

        // Set `last` to refer to the last element in the stack
		const last = stack[stack.length - 1];

        // If the current element is a key in the `ref` object, then it's a valid opening parentheses
		if (curr in ref) {
            // Push into the stack the respective closing parentheses
			stack.push(ref[curr]);
		}
        // If curr element is a closing parentheses and matches the last element in the stack
        else if (curr === last) {
            // Then it means the parentheses properly closes. Pop off the stack and continue
			stack.pop();
		}
        // Otherwise, the curr element is a closing parentheses that does not match an opening parentheses (not in order)
        else {
            // Return false
			return false;
		}
	}
    
    // At the end, `stack` array should be empty
    //      If not empty, then the string is not a valid parentheses
	return stack.length === 0;
};
