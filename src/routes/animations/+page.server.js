import { loadFileNames } from "../../functions/loading.js";

export async function load() {
	const [files2d, files3d, webm2d, webm3d] = await Promise.all([
		loadFileNames("animations/2d", ".mp4"),
		loadFileNames("animations/3d", ".mp4"),
		loadFileNames("animations/2d", ".webm"),
		loadFileNames("animations/3d", ".webm")
	]);

	return {
		files2d,
		files3d,
		webm2d,
		webm3d
	};
}
