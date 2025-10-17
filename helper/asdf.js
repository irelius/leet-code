import fs from "fs";
import path from "path";

const folderPath = `${process.cwd()}/questions`;
const folderNames = fs.readdirSync(folderPath);

for (let i = 0; i < folderNames.length; i++) {
	const folderName = folderNames[i];
    const fileLocation = `${process.cwd()}/questions/${folderName}/${folderName}.js`
    const newLocation = `${process.cwd()}/questions/${folderName}.js`

    fs.rename(fileLocation, newLocation, (err) => {
        console.log(err)
    })

	// const filePath = `${process.cwd()}/questions/${folderName}`;

	// const oldFileName = fs.readdirSync(`${filePath}`)[0];
	// const newFileName = `${folderName}.js`;

	// fs.rename(`${filePath}/${oldFileName}`, `${filePath}/${newFileName}`, (err) => {
	// 	console.log(err);
	// });
    

}
