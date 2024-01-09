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

	// Checks if there are images at all
	// Check if they are optimized
	// Check if there is a webm optimized file
	const [isImages, isOptimized, webm] = await Promise.all([
		new Promise((resolve) =>
			fs.readdir(
				`./static/animations/${params.category}/${paramFileLocation}`,
				{ withFileTypes: true },
				(err, files) => {
					if (err) return resolve(false);
					resolve(true);
				}
			)
		),
		new Promise((resolve) =>
			fs.readdir(
				`./static/animations/${params.category}/${paramFileLocation}`,
				{ withFileTypes: true },
				(err, files) => {
					if (err) return resolve(false);
					resolve(files.find((f) => f.isDirectory() && f.name === "auto-generated"));
				}
			)
		),
		new Promise((resolve) =>
			fs.readdir(`./static/animations/${params.category}`, (err, files) => {
				if (err) return resolve(false);
				if (files.some((f) => f === `${paramFileLocation}.webm`))
					resolve(`${paramFileLocation}.webm`);
				resolve(false);
			})
		)
	]);

	const images = isImages
		? await loadFileNames(
				`animations/${params.category}/${paramFileLocation}${isOptimized ? "/auto-generated" : ""}`
			)
		: [];

	return {
		data: animations[video] || { alt: paramFileLocation },
		images,
		params,
		video: `${paramFileLocation}.mp4`,
		webm
	};
}
