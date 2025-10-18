// https://leetcode.com/problems/valid-sudoku/description/

// Helper function to check each row
const checkRow = (board) => {
	for (let i = 0; i < board.length; i++) {
		const check = new Set();

		for (let j = 0; j < board[i].length; j++) {
			const currNum = board[i][j];
			if (currNum !== ".") {
				if (check.has(currNum)) {
					console.log("asdf");
					return false;
				} else {
					check.add(currNum);
				}
			}
		}
	}
};

// Helper function to check each column
const checkColumn = (board) => {
	for (let i = 0; i < board.length; i++) {
		const check = new Set();

		for (let j = 0; j < board.length; j++) {
			const currNum = board[j][i];
			if (currNum !== ".") {
				if (check.has(currNum)) {
					return false;
				} else {
					check.add(currNum);
				}
			}
		}
	}
};

// Helper function to check each box
const checkBox = (x, y, board) => {
	if (x > 6) return true;

	let boxCheck = new Set();

	for (let i = x; i < x + 3; i++) {
		for (let j = y; j < y + 3; j++) {
			const currNum = board[i][j];
			console.log(currNum);
			if (currNum !== ".") {
				if (boxCheck.has(currNum)) {
					console.log("asdf");
					return false;
				} else {
					boxCheck.add(currNum);
				}
			}
		}
		console.log("");
	}

	y += 3;
	if (y === 9) {
		y = 0;
		x += 3;
	}

	return checkBox(x, y, board);
};

// Brute force solution
export const validSudoku = (board) => {
	// Helper function to check each row
	const rowCheck = checkRow(board);
	if (rowCheck === false) return false;

	// Helper function to check each column
	const columnCheck = checkColumn(board);
	if (columnCheck === false) return false;

	let x = 0;
	let y = 0;

	// Helper function check each box
	const boxCheck = checkBox(x, y, board);
	if (boxCheck === false) return false;

	return true;
};
