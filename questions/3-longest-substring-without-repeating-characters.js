// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
export const longestSubstringWithoutRepeatingCharacters = (s) => {
	const tracker = new Set();
	let l = 0;
	let r = 0;
	let length = 0;

	while (r < s.length) {
		while (tracker.has(s[r])) {
			tracker.delete(s[l]);
			l++;
		}
		tracker.add(s[r]);
		length = Math.max(length, r - l + 1);

		r++;
	}
	return length;
};

// // Works, but not that great?
// export const longestSubstringWithoutRepeatingCharacters = (s) => {
// 	if (s.length === 0) return 0;

// 	const tracker = new Set();
// 	let length = 0;
// 	let l = 0;
// 	let r = 0;

// 	while (r < s.length) {
// 		const rightCurr = s[r];

// 		if (tracker.has(rightCurr)) {
//             while(s[l] !== rightCurr) {
//                 tracker.delete(s[l])
//                 l++
//             }

//             l++
// 		}
// 		tracker.add(rightCurr);
// 		length = Math.max(length, r - l + 1);
// 		r++;
// 	}

// 	return length;
// };
