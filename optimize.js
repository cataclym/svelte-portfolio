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
const files = await new Promise((resolve, reject) =>
	fs.readdir('./static/illustrations/', undefined, (err, files) => {
		if (err) reject(err);
		resolve(files);
	})
);

files.shift()

const mapped = await Promise.all(files.map(async (f) => JSON.stringify(f)));

for (const file of mapped) {
	const query = `./static/illustrations/${file} -o ./src/assets/illustrations/${file.replace('.png', '.webp')}`;
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
