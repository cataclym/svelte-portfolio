import { loadFileNames } from "../../functions/loading.js";

export async function load() {
	const imagesArray = await loadFileNames("photography")

	return {
		imagesArray,
	};
}
