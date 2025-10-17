import fs from "fs";
import path from "path";

// Get the custom input name from the script invocation (3rd element)
const name = process.argv[2];

if (!name) {
	console.error("Provide the name of the leetcode question.\n     e.g. `npm run create 1-two-sum`");
	process.exit();
}

// Get the folder and file name for the leetcode question
const folderDir = `${process.cwd()}/questions/${name}.js`;

// Get the folder and test file name for the leetcode test
const testDir = `${process.cwd()}/test`;
const testName = `${name}.test.js`;

console.log("booba", fileName);
console.log("booba", testName);

// If the file in the folder already exists
if(fs.existsSync(path.join(folderDir, fileName))) {
    console.log("Leetcode folder/file already exists")
}
// If the file/folder doesn't exist, create it
else {
    fs.mkdirSync()
}
// const test = path.join(folderDir, fileName)
// console.log(test)
