// https://leetcode.com/problems/valid-sudoku/description/

export const validSudoku = (board) => {
	// Create arrays (size 9) filled with unique sets
	//      Can't use `.fill(new Set)` because that points to the same set. pretty interesting
	// The index of each set serves as the box/row/column number
	//      ex: rowCheck[3] is for row 4
	let boxCheck = new Array(9).fill().map((u) => new Set());
	let rowCheck = new Array(9).fill().map((u) => new Set());
	let colCheck = new Array(9).fill().map((u) => new Set());

	for (let i = 0; i < board.length; i++) {
		const currRow = board[i];

		for (let j = 0; j < currRow.length; j++) {
			const currNum = currRow[j];

			// If the current element isn't "."
			if (currNum !== ".") {
				// ROW
				// Check if the current number is in the current "row", return false if so
				if (rowCheck[i].has(currNum)) return false;
				// Add the current number to the correct row
				rowCheck[i].add(currNum);

				// COLUMN
				// Check if the current number is in the current "column", return false if so
				if (colCheck[j].has(currNum)) return false;
				// Add the current number to the correct column
				colCheck[j].add(currNum);

				// BOX
				// Calculate which box the current element is in
				//      Math.floor(i / 3) and Math.floor(j / 3) both return 0, 1, or 2
				//      One is multiplied by 3 to represent the top row/column for each third section. Returns 0, 3, or 6
				//      The other variations are just added which returns 0 - 8
				const boxCalc = 3 * Math.floor(i / 3) + Math.floor(j / 3);
				if (boxCheck[boxCalc].has(currNum)) return false;
				boxCheck[boxCalc].add(currNum);
			}
		}
	}

	return true;
};

// // Brute force solution
// // Helper function to check each row
// const checkRow = (board) => {
// 	for (let i = 0; i < board.length; i++) {
// 		const check = new Set();

// 		for (let j = 0; j < board[i].length; j++) {
// 			const currNum = board[i][j];
// 			if (currNum !== ".") {
// 				if (check.has(currNum)) {
// 					return false;
// 				} else {
// 					check.add(currNum);
// 				}
// 			}
// 		}
// 	}
// };

// // Helper function to check each column
// const checkColumn = (board) => {
// 	for (let i = 0; i < board.length; i++) {
// 		const check = new Set();

// 		for (let j = 0; j < board.length; j++) {
// 			const currNum = board[j][i];
// 			if (currNum !== ".") {
// 				if (check.has(currNum)) {
// 					return false;
// 				} else {
// 					check.add(currNum);
// 				}
// 			}
// 		}
// 	}
// };

// // Helper function to check each box
// const checkBox = (x, y, board) => {
// 	if (x > 6) return true;

// 	let boxCheck = new Set();

// 	for (let i = x; i < x + 3; i++) {
// 		for (let j = y; j < y + 3; j++) {
// 			const currNum = board[i][j];
// 			if (currNum !== ".") {
// 				if (boxCheck.has(currNum)) {
// 					return false;
// 				} else {
// 					boxCheck.add(currNum);
// 				}
// 			}
// 		}
// 	}

// 	y += 3;
// 	if (y === 9) {
// 		y = 0;
// 		x += 3;
// 	}

// 	return checkBox(x, y, board);
// };

// export const validSudoku = (board) => {
// 	// Helper function to check each row
// 	const rowCheck = checkRow(board);
// 	if (rowCheck === false) return false;

// 	// Helper function to check each column
// 	const columnCheck = checkColumn(board);
// 	if (columnCheck === false) return false;

// 	let x = 0;
// 	let y = 0;

// 	// Helper function check each box
// 	const boxCheck = checkBox(x, y, board);
// 	if (boxCheck === false) return false;

// 	return true;
// };
