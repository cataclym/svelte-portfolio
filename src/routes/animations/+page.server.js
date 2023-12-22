import fs from 'fs';

export async function load() {
	const animationsArray = (
		await new Promise((resolve, reject) => {
			fs.readdir('./static/animations', undefined, (err, files) =>
				err ? reject(err) : resolve(files.filter(f => f !== ".gitkeep"))
			);
		})
	).map((img) => `./animations/${img}`);

	return {
		animationsArray,
	};
}
