import fs from 'fs';
import * as child_process from 'child_process';

try {
	child_process.execSync('command -v cwebp >/dev/null 2>&1');
} catch (err) {
	console.log(err);
	process.exit(1);
}

fs.mkdir("./static/illustrations/auto-generated", undefined, (err, path) => {
	if (err && err.code !== "EEXIST") throw new Error(err)
	else if (path !== undefined) console.log(`Created ${path}.`)
})

/** @constant
 * 	@type {string[]}
 */
const toBeDeleted = await new Promise((resolve, reject) => fs.readdir("./static/illustrations/auto-generated", undefined, (err, files) => err
	? reject(err)
	: resolve(files)
))

toBeDeleted.shift()

console.log("Deleting contents of static/illustrations/auto-generated")

Promise.all(toBeDeleted.map(file => new Promise((resolve, reject) => fs.unlink(`./static/illustrations/auto-generated/${file}`, (err) => err
	? reject(err)
	: resolve())
)))
	.then(console.log("Content deleted.\n"))

console.log("Converting PNGs to WEBP:")

/** @constant
 * 	@type {Dirent[]}
 */
const files = await new Promise((resolve, reject) =>
	fs.readdir('./static/illustrations/', { withFileTypes: true }, (err, files) => {
		if (err) reject(err);
		resolve(files.filter(d => d.isFile()));
	})
);

files.shift()

const mapped = await Promise.all(files.map(async (f) => JSON.stringify(f.name)));

for (const file of mapped) {
	const query = `./static/illustrations/${file} -o ./static/illustrations/auto-generated/${file.replaceAll("'", "").replace('.png', '.webp')}`;
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
