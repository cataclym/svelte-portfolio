import { error } from "@sveltejs/kit";
import { animations } from "../../../../captions/animations.js";
import { loadFileNames } from "../../../../functions/loading.js";
import fs from "fs";

/**
 * @param params { { category: string, animation: string } }
 * @return {Promise<{images: string[], data: {alt: string}, video: string, params}>}
 */
export async function load({ params }) {
	const paramFileLocation = params.animation;

	const video = Object.keys(animations).find(
		(value) => value.slice(0, value.indexOf(".mp4")) === paramFileLocation
	);

	// If images have been optimized
	const isOptimized = await new Promise((resolve) =>
		fs.readdir(
			`./static/animations/${params.category}/${paramFileLocation}`,
			{ withFileTypes: true },
			(err, files) => {
				if (err) return resolve(false);
				resolve(files.find((f) => f.isDirectory() && f.name === "auto-generated"));
			}
		)
	);

	// Check if there are images
	const isImages = await new Promise((resolve) =>
		fs.readdir(
			`./static/animations/${params.category}/${paramFileLocation}`,
			{ withFileTypes: true },
			(err, files) => {
				if (err) return resolve(false);
				resolve(true);
			}
		)
	);

	const images = isImages
		? await loadFileNames(
				`animations/${params.category}/${paramFileLocation}${isOptimized ? "/auto-generated" : ""}`
			)
		: [];

	return {
		data: video ? animations[video] : { alt: paramFileLocation },
		images,
		params,
		video: video ?? `${paramFileLocation}.mp4`
	};
}
