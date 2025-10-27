// https://leetcode.com/problems/longest-repeating-character-replacement/

export const longestRepeatingCharacterReplacement = (s, k) => {
	// set `length` variable to keep track of longest substring
	let length = 0;

	// set left and right pointer variables
	let l = 0;
	let r = 0;

	// set a counter map to count the frequeny of each character
	let counter = {};
	// set variable to keep track of the most frequent character in current substring
	//      used to calculate how many different characters are in current substring and if # of different characters is more than `k`
	let tempF = 0;

	// loop through string
	while (r < s.length) {
		// set reference variables to characters at left and right pointers
		const left = s[l];
		const right = s[r];

		// add the right character to `counter` frequency map
		counter[right] = (counter[right] || 0) + 1;

		// update `tempF` to the most frequent character so far
		tempF = Math.max(tempF, counter[right]);

		// calculate...
        //      how many characters in this substring: `r - l + 1`
        //      subtract with `tempF` to find out # of characters different from most frequent character
        //      if # of differing characters in substring is > k, then current substring is not valid
        // an `if` would work instead of `while`, but is less efficient
        //      assumedly, because it would remove only 1 character if using `if`
		while (r - l + 1 - tempF > k) {
            // subtract from the counter map the left character
            //      no need to update `tempF` since this would only run if another character was most frequent
			counter[left]--;

            // move pointer left
			l++;

            // loop until condition is satisfied: current substring is valid given `k`
		}

        // update `length` to the length of the valid substring
		length = Math.max(length, r - l + 1);

        // move right pointer by one
		r++;
	}

    // return length
	return length;
};

// // Brute force solution
// export const longestRepeatingCharacterReplacement = (s, k) => {
// 	let length = 0;

// 	// Set left pointer with for loop and `i` index
// 	for (let i = 0; i < s.length; i++) {
// 		// set hash map to count the frequency of characters
// 		let tracker = {};
// 		// set `counter` for the most frequent character in a substring
// 		let counter = 0;

// 		// set right pointer with for loop and `j` index
// 		for (let j = i; j < s.length; j++) {
// 			const curr = s[j];

// 			// add current right character to `tracker` object
// 			tracker[curr] = (tracker[curr] || 0) + 1;

// 			// update `counter` to be the count of the most frequent character after adding this current character
// 			counter = Math.max(counter, tracker[curr]);

// 			// calculate...
// 			//      how many characters in this substring: `j - 1 + 1`
// 			//      subtract counter to find out how many differing characters in substring
// 			//      if # of differing characters in substring is <= k, then this substring is still valid
// 			if (j - i + 1 - counter <= k) {
// 				// if substring is valid with allowed # of changes, update `length` to current substring length
// 				length = Math.max(length, j - i + 1);
// 			} else {
// 				// if substring exceeds # of allowed changes, stop checking later characters
// 				break;
// 			}
// 		}
// 	}

// 	return length;
// };
