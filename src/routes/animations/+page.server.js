import { loadFileNames } from "../../functions/loading.js";

export async function load() {
	const animationsArray = await loadFileNames("animations")

	return {
		animationsArray,
	};
}
