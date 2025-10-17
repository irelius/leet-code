import fs from "fs";
import * as changeCase from "change-case";

// Get the custom input name from the script invocation (3rd element)
const name = process.argv[2];

// Check if name was provided
if (!name) {
	// Throw error for missing question name
	console.error("Error: Provide the name of the LeetCode question.\n     e.g. `npm run create 1-two-sum`");
	process.exit();
}

// Split the name by '-' delimiter, filtering out empty strings
//      e.g. "1-two-sum" => ['1', 'two', 'sum']
//      e.g. "1--" => ['1']
const splitName = name.split("-").filter((el) => el !== "");

// If the length of the `splitName` is less than 2, provided value isn't delimited by '-'
if (splitName.length < 2) {
	// Throw error for incorrectly formatted test name
	console.error(
		"Error: Provide both the number and name of the LeetCode question delimited with '-'. \n     e.g. `npm run create 1-two-sum`"
	);
	process.exit();
}

// Get the question number
const questionNumber = splitName[0];

// If the first element of `splitName` isn't a number (or can't be turned into a number)
if (isNaN(Number(questionNumber))) {
	// Throw an error for incorrectly formatted test name
	console.error(
		"Error: Name of LeetCode question must start with the question's number. \n     e.g. `npm run create 1-two-sum`"
	);
	process.exit();
}

// Slice off the number of the question and join back to get name, delimited by '-'
const questionName = splitName.slice(1).join("-");
// Use `splitName` and `changeCase` package to convert question name to be camelCase
const functionName = changeCase.camelCase(questionName);
// Use `splitName` and `changeCase` package to convert question name to be capitalized
const testName = changeCase.capitalCase(questionName);

// ---------------------------------------- QUESTION FILE----------------------------------------
// Get the folder and file name for the LeetCode question
const questionPath = `${process.cwd()}/questions/${name}.js`;

// If the LeetCode question file already exists in the "questions" folder
if (fs.existsSync(questionPath)) {
	// Alert about it's existence
	console.log("Question file already exists: ", `/questions/${name}.js`);
}
// If the question file doesn't exist, create it
else {
	fs.writeFileSync(
		questionPath,
		`export const ${functionName} = () => {
    
}`
	);
	console.log("Created question file: ", `/questions/${name}.js`);
}

// ---------------------------------------- TEST FILE----------------------------------------
// Get the folder and test file name for the LeetCode test
const testPath = `${process.cwd()}/tests/${name}.test.js`;

// If the LeetCode test file already exists in the "tests" folder
if (fs.existsSync(testPath)) {
	// Alert about it's existence
	console.log("Test file already exists: ", `/tests/${name}.test.js`);
}
// If the test file doesn't exist, create it
else {
	fs.writeFileSync(
		testPath,
		`import { describe, test, expect } from "vitest";
import { ${functionName} } from "../questions/${name}";

describe("${questionNumber} - ${testName}", () => {
    test("Case 1", () => {
        expect(${functionName}()).toEqual()
    })
    
    test("Case 2", () => {
        expect(${functionName}()).toEqual()
    })

    test("Case 3", () => {
        expect(${functionName}()).toEqual()
    })
})
        `
	);
	console.log("Created test file: ", `/tests/${name}.test.js`);
}
