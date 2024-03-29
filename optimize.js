import fs from "fs";
import * as child_process from "child_process";

// Check if required libs are installed
try {
	child_process.execSync("command -v cwebp >/dev/null 2>&1");
	child_process.execSync("command -v ffmpeg >/dev/null 2>&1");
} catch (err) {
	console.log("cwebp is required to run optimization");
	process.exit(1);
}

const animationSubFolders = ["2d", "3d"];

(async () => {
	const [dir2d, dir3d] = await Promise.all(
		animationSubFolders.map(async (category) => {
			return new Promise((resolve, reject) =>
				fs.readdir(`./static/animations/${category}`, { withFileTypes: true }, (err, files) => {
					if (err) return reject(err);
					const dirs = files.filter((f) => f.isDirectory());
					return resolve(dirs);
				})
			);
		})
	);

	const [mp4Files2d, mp4Files3d] = await Promise.all(
		animationSubFolders.map(async (category) => {
			return new Promise((resolve, reject) =>
				fs.readdir(`./static/animations/${category}`, { withFileTypes: true }, (err, files) => {
					if (err) return reject(err);
					const mp4s = files.filter((f) => f.isFile() && f.name.endsWith(".mp4"));
					return resolve(mp4s);
				})
			);
		})
	);

	const promises = [];

	// Creates and cleans auto-generated directories
	// Optimizes .PNGs and outputs .WEBP to auto-generated/ folder
	promises.push(optimizeImage("./static/illustrations"));

	if (dir2d.length)
		dir2d.forEach((dirent) => promises.push(optimizeImage(`${dirent.path}/${dirent.name}`)));
	if (dir3d.length)
		dir3d.forEach((dirent) => promises.push(optimizeImage(`${dirent.path}/${dirent.name}`)));

	if (mp4Files2d) promises.push(...mp4Files2d.map((dirent) => MP4ToWEBM(dirent.path, dirent.name)));
	if (mp4Files3d) promises.push(...mp4Files3d.map((dirent) => MP4ToWEBM(dirent.path, dirent.name)));

	// Run all promises
	await Promise.allSettled(promises);
	console.log("Finished optimizing PNGs and MP4s");
})();

/**
 * Prefix location with ./
 * @param location {string}
 * @returns void
 */
async function optimizeImage(location) {
	if (location.endsWith("/")) location = location.substring(0, location.length - 1);

	await new Promise((resolve, reject) =>
		fs.mkdir(`${location}/auto-generated`, undefined, (err, path) => {
			if (err && err.code !== "EEXIST") reject(err);
			else if (path !== undefined) resolve(console.log(`Created ${path}.`));
			resolve();
		})
	);

	/** @constant
	 * 	@type {string[]}
	 */
	const toBeDeleted = await new Promise((resolve, reject) =>
		fs.readdir(`${location}/auto-generated`, undefined, (err, files) =>
			err ? reject(err) : resolve(files)
		)
	);

	toBeDeleted.shift();

	console.log(`Deleting contents of ${location}/auto-generated`);

	Promise.all(
		toBeDeleted.map(
			(file) =>
				new Promise((resolve, reject) =>
					fs.unlink(`${location}/auto-generated/${file}`, (err) => (err ? reject(err) : resolve()))
				)
		)
	).then(console.log("Content deleted.\n"));

	/** @constant
	 * 	@type {Dirent[]}
	 */
	const files = await new Promise((resolve, reject) =>
		fs.readdir(`${location}/`, { withFileTypes: true }, (err, files) => {
			if (err) reject(err);
			resolve(files.filter((d) => d.isFile()));
		})
	);

	files.shift();

	const mapped = await Promise.all(files.map(async (f) => JSON.stringify(f.name)));

	// Only optimize (convert) .png to .webp
	return Promise.all(
		mapped.map(async (file) => {
			const query = `${location}/${file} -o ${location}/auto-generated/${file
				.replaceAll("'", "")
				.replace(".png", ".webp")}`;
			return new Promise((resolve, reject) =>
				child_process.exec(`cwebp ${query}`, (error, stdout, stderr) => {
					if (error) reject(error);
					resolve(console.log(query));
				})
			);
		})
	);
}

async function MP4ToWEBM(path, videoName) {
	return new Promise((resolve, reject) => {
		const video = JSON.stringify(videoName);
		console.log(`Optimizing ${path}/${videoName}`);

		child_process.exec(
			`ffmpeg -y -i ${path}/${video} -c:v libvpx-vp9 -crf 30 -b:v 0 ${path}/${video.slice(
				0,
				video.indexOf(".mp4")
			)}.webm"`,
			{ encoding: "utf-8" },
			(error) => (error ? reject(error) : resolve(console.log(`Finished optimizing ${videoName}`)))
		);
	});
}
