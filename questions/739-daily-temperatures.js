// https://leetcode.com/problems/daily-temperatures/

export const dailyTemperatures = (temperatures) => {
	// Create an `ans` array initialized to the size of `temperatures`, filled with 0
	//      This is because each temperature needs to have a number til the next hottest day (or 0 if there isn't one)
	const ans = new Array(temperatures.length).fill(0);

    // Create `stack` array to maintain order of elements in relation to their next greater temperature day
    //      Also keeps track of days that need to find its next hotter day
	const stack = [];

    // Go through `temperatures` array
	for (let i = 0; i < temperatures.length; i++) {
        // Set `curr` to the current temperature of the array
		const curr = temperatures[i];
		
        // While the `stack` array has something and the last element in the `stack` array is colder than the current temp
        //      Continues for each day in the stack until a hotter day is found (or there aren't hotter days)
		while (stack.length > 0 && curr > stack[stack.length - 1].temp) {
            // Pop the last element from the stack and store in `currStack`
			const currStack = stack.pop();
			
            // Change the `ans` array at the index of the current index to `i - current index`
            //      The difference is how many "days" from the element in the stack til its next hottest day
			ans[currStack.index] = i - currStack.index;
		}

        // Push to the stack an object of the current day's temp and index
		stack.push({ temp: curr, index: i });
	}

	return ans;
};

// // Brute force solution
// //      Bad time complexity, O(n^2)
// export const dailyTemperatures = (temperatures) => {
//     // Establish `ans` array to keep track of how many days until hotter day
// 	const ans = [];

//     // Go through `temperatures` array
// 	for (let i = 0; i < temperatures.length; i++) {
//         // Set `curr` to the current day for the temperatures
// 		const curr = temperatures[i];

//         // Set variable to know if a hotter day was found
//         let higherTempFound = false

//         // Go through `temperatures` array starting at `i + 1` as the index
// 		for (let j = i + 1; j < temperatures.length; j++) {
//             // Set `comp` to the current comparison day for temperatures
// 			const comp = temperatures[j];

//             // If the `curr` day is colder than the `comp` day
// 			if (curr < comp) {
//                 // Push to `ans` array the difference between the `j` and `i` index (difference of days)
// 				ans.push(j - i);

//                 // Set `higherTempFound` to true
//                 higherTempFound = true

//                 // Break because we don't need to keep searching
// 				break;
// 			}
// 		}

//         // If `higherTempFound` is still false, then no hotter day exists for the `curr` day, push 0 into `ans`
//         if(higherTempFound === false) ans.push(0)
// 	}

//     // Return `ans`
//     return ans
// };
