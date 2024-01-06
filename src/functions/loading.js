import fs from "fs";

/**
 *
 * @param dir
 * @param filetype
 * @return {Promise<string[]>}
 */
export async function loadFileNames(dir, filetype = false) {
	return (
		await new Promise((resolve, reject) => {
			fs.readdir(`./static/${dir}`, { withFileTypes: !!filetype }, async (err, files) => {
				return err
					? reject(err)
					: !!filetype
						? resolve(
								files.filter(
									(f) => f.name !== ".gitkeep" && f.isFile() && f.name.endsWith(filetype)
								)
							)
						: resolve(files.filter((f) => f !== ".gitkeep"));
			});
		})
	).map((file) => `/${dir}/${filetype ? file.name : file}`);
}
