import { loadFileNames } from '../../functions/loading.js';

export async function load() {
	const [d2, d3, misc] = await Promise.all([
		loadFileNames('animations/2d'),
		loadFileNames('animations/3d'),
		loadFileNames('animations/misc')
	]);

	return {
		d2,
		d3,
		misc
	};
}
