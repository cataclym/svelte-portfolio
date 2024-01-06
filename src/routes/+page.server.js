import fs from "fs";
import { loadFileNames } from "../functions/loading.js";

export async function load() {
	/** @const
	 * 	@type { [string, string[]] }
	 */
	const [aboutMe, imagesArray] = await Promise.all([
		new Promise((resolve) =>
			fs.readFile("./static/text/aboutMe.txt", "utf8", (err, data) =>
				err ? resolve("") : resolve(data)
			)
		),
		loadFileNames("illustrations/auto-generated")
	]);

	return {
		aboutMe,
		imagesArray: imagesArray.sort(() => Math.random() - 0.5)
	};
}
