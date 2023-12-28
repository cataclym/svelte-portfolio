import fs from "fs";

export async function loadFileNames(dir) {
	return (
		await new Promise((resolve, reject) => {
			fs.readdir(`./static/${dir}`, undefined, (err, files) =>
				err ? reject(err) : resolve(files.filter(f => f !== ".gitkeep"))
			);
		})
	).map((img) => `./${dir}/${img}`);
}
