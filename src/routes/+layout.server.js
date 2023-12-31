export async function load({ fetch }) {

	const res = await fetch("/meta.json");

	if (!res.ok) return {
		"title": "",
		"shortName": "",
		"description": "",
		"url": "",
		"image": "",
		"color": "#ffffff"
	}

	const json = await res.json();

	const meta = `
		<meta name="title" content="${json.title}">
		<meta name="description" content="${json.description}">
		
		<!-- Open Graph / Facebook -->
		<meta property="og:type" content="website">
		<meta property="og:url" content="${json.url}">
		<meta property="og:title" content="${json.title}">
		<meta property="og:description" content="${json.description}">
		<meta property="og:image" content="${json.image}">
		
		<!-- Twitter -->
		<meta property="twitter:card" content="summary_large_image">
		<meta property="twitter:url" content="${json.url}">
		<meta property="twitter:title" content="${json.title}">
		<meta property="twitter:description" content="${json.description}">
		<meta property="twitter:image" content="${json.image}">
		
		<link rel="icon" type="image/png" href="/favicon.png">
		<link rel="apple-touch-icon" type="image/png" href="/favicon.png">
		
		<meta name="theme-color" content="${json.color}">	
	`

	const { shortName } = json;

	return {
		meta,
		shortName
	}
}
