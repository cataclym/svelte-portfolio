import fs from 'fs';
import * as child_process from 'child_process';

try {
	child_process.execSync('command -v cwebp >/dev/null 2>&1');
} catch (err) {
	console.log(err);
	process.exit(1);
}

/** @constant
 * 	@type {string[]}
 */
const toBeDeleted = await new Promise((resolve, reject) => fs.readdir("./src/assets/illustrations", undefined, (err, files) => err
	? reject(err)
	: resolve(files)
))

toBeDeleted.shift()

console.log("Deleting contents of src/assets/illustrations")

Promise.all(toBeDeleted.map(file => new Promise((resolve, reject) => fs.unlink(`./src/assets/illustrations/${file}`, (err) => err
	? reject(err)
	: resolve())
)))
	.then(console.log("Content deleted.\n"))

console.log("Converting PNGs to WEBP:")

/** @constant
 * 	@type {string[]}
 */
const files = await new Promise((resolve, reject) =>
	fs.readdir('./static/illustrations/', undefined, (err, files) => {
		if (err) reject(err);
		resolve(files);
	})
);

files.shift()

const mapped = await Promise.all(files.map(async (f) => JSON.stringify(f)));

for (const file of mapped) {
	const query = `./static/illustrations/${file} -o ./src/assets/illustrations/${file.replaceAll("'", "").replace('.png', '.webp')}`;
	void new Promise((resolve, reject) =>
		child_process.exec(
			`cwebp ${query}`,
			(error, stdout, stderr) => {
				if (error) reject(error);
				resolve(console.log(query));
			}
		)
	);
}
