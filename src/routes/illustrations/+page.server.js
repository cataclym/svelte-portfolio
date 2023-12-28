import { illustrations } from "../../captions/illustrations.js";
import { loadFileNames } from "../../functions/loading.js";

export async function load() {
	const imagesArray = await loadFileNames("illustrations")

	return {
		imagesArray,
		images: illustrations
	};
}
