import fs from 'fs';

export async function load() {

	const imagesArray = (await new Promise((resolve, reject) => {
		fs.readdir("./static/images", undefined, (err, files) => err ? reject(err) : resolve(files))
	})).map(img => `./images/${img}`)

	return {
		imagesArray,
	}
}
