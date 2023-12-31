import fs from "fs";

export async function load() {

	/** @const
			@type string
	 */
		const contact = await new Promise((resolve) => fs.readFile("./static/text/contact.txt", 'utf8', (err, data) => err
			? resolve("")
			: resolve(data)
		))

	return {
		contact
	}
}
