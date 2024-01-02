import fs from "fs";

export async function load() {

	const	aboutMe = await new Promise((resolve) => fs.readFile("./static/text/aboutMe.txt", 'utf8', (err, data) => err
		? resolve("")
		: resolve(data)
	))

	return {
		aboutMe
	}
}
