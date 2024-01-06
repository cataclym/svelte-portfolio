import { loadFileNames } from "../../functions/loading.js";

export async function load() {
	const [files2d, files3d] = await Promise.all([
		loadFileNames("animations/2d", ".mp4"),
		loadFileNames("animations/3d", ".mp4")
	]);

	return {
		files2d,
		files3d
	};
}
