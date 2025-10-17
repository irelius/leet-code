export const validAnagram = (s, t) => {
	// If the length of the two strings don't match, they can't be anagrams of each other
	if (s.length !== t.length) return false;

	// Create hash map for s string
	let sCounter = {};
	// Create hash map for t string
	let tCounter = {};

	// Loop through s string
	for (let i = 0; i < s.length; i++) {
		// Use `i` to index the current position of s and t string
		//      Already confirmed to be equal length
		const currS = s[i];
		const currT = t[i];

		// Add the current element of each string to their respective hash map
		//      If character is not a key in the hash map, set it to 0
		//      If it exists as a key, add 1
		sCounter[currS] = (sCounter[currS] || 0) + 1;
		tCounter[currT] = (tCounter[currT] || 0) + 1;
	}

	// Go through each key in either string hash map
	//      sCounter or tCounter would work
	for (const key in sCounter) {
		// If a key of one hash map does not match the value of the same key in the other hash map, return false
		if (sCounter[key] !== tCounter[key]) return false;

		// Since length was already confirmed to be equal, no concern for overlaps
	}

	return true;
};
