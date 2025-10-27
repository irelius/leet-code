// https://leetcode.com/problems/permutation-in-string/description/
export const permutationInString = (s1, s2) => {

};

// // Brute force solution
// export const permutationInString = (s1, s2) => {
// 	// `s2` must contain permutation of `s1`
// 	//      so if `s1` is longer, then return false
// 	if (s1.length > s2.length) return false;

// 	// build tracker set
// 	const tracker = new Set();
// 	// sort `s1`
// 	s1 = s1.split("").sort().join("");
// 	// add to tracker set each character
// 	for (let i = 0; i < s1.length; i++) {
// 		tracker.add(s1[i]);
// 	}

// 	// set left to 0
// 	let l = 0;
// 	// set right pointer to `l` plus the length of s1
// 	let r = l + s1.length;

// 	// while right pointer is <= the length of `s2`, to check rest of the string
// 	while (r <= s2.length) {
// 		// set `curr` to the left pointer character
// 		const curr = s2[l];

// 		// if the tracker set has `curr`
// 		if (tracker.has(curr)) {
//             // slice the substring from `l` and `r` pointer and sort alphabetically
// 			const sort = s2.slice(l, r).split("").sort().join("");

// 			// if `s1` equals `sort`, then `s2` has a permutation of `s1`
// 			if (s1 === sort) return true;
// 		}

//         // increment left and right pointers
// 		l++;
// 		r++;
// 	}
// 	return false;
// };
