import fs from "fs";

export async function load() {

	const promiseFiles = new Promise((resolve, reject) => fs.readdir("./static/illustrations", undefined, (err, files) => err
			? reject(err)
			: resolve(files.filter(f => f !== ".gitkeep"))
		)),
		promiseText = new Promise((resolve, reject) => fs.readFile("./static/text/aboutMe.txt", 'utf8', (err, data) => err
		? reject(err)
		: resolve(data)
	))

	/** @const
			@type {[string[], string]}
	*/
	const [imagesArray, aboutMe] = await Promise.all([promiseFiles, promiseText])

	return {
		imagesArray: imagesArray
			.map(img => `./illustrations/${img}`)
			.sort(() => Math.random() - 0.5),
		aboutMe
	}
}
