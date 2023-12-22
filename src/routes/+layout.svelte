<script>
	import "../app.css";

	import {
		PUBLIC_INSTAGRAM,
		PUBLIC_LINKEDIN,
		PUBLIC_WHATSAPP,
		PUBLIC_TWITTER,
	} from "$env/static/public"

	const navigationTargets = [
		{
			name: "Illustrations",
			url: "/illustrations"
		},
		{
			name: "Animations",
			url: "/animations"
		},
		{
			name: "Contact",
			url: "/contact"
		}
	];

	$: currentRoute = $page.url.pathname;
	import { page } from "$app/stores";

</script>

<svelte:head>
	<meta name="title" content={`Natalie Tung | ${currentRoute}`}>
	<meta name="description"
				content="WIP">

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website">
	<meta property="og:url" content="WIP">
	<meta property="og:title" content="WIP">
	<meta property="og:description"
				content="WIP">
	<meta property="og:image" content="WIP">

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:url" content="WIP">
	<meta property="twitter:title" content="WIP">
	<meta property="twitter:description"
				content="WIP">
	<meta property="twitter:image" content="WIP">

	<link rel="icon" type="image/png" href="/favicon.ico">
	<link rel="apple-touch-icon" type="image/png" href="/favicon.ico">

	<meta name="theme-color" content="#4D3F6DFF">
</svelte:head>

<div class="header">
	<div class="leftPart">
		<a class="linkContainer" href="/">
			<span class:active={currentRoute === "/"} class="linktext">Home</span>
		</a>
		{#each navigationTargets as target}
			<a class="linkContainer" href={target.url}>
				<span class:active={currentRoute.startsWith(target.url)} class="linktext">{target.name}</span>
			</a>
		{/each}
	</div>
	<span class="socials_span">
		<a href={PUBLIC_INSTAGRAM}><iconify-icon icon="cib:instagram" width="24"></iconify-icon></a>
		<a href={PUBLIC_LINKEDIN}><iconify-icon icon="cib:linkedin" width="24"></iconify-icon></a>
		<a href="tel: {PUBLIC_WHATSAPP}"><iconify-icon icon="cib:whatsapp" width="24"></iconify-icon></a>
		<a href={PUBLIC_TWITTER}><iconify-icon icon="cib:twitter" width="24"></iconify-icon></a>
	</span>
</div>

<slot />
	<br>
	<footer class="footer_grip_container">
		<p class="footer_item">Made with ♥️ by Cata</p>
	</footer>

<style>
	.footer_grip_container {
		background-color: var(--background);
		margin-top: auto;
		display: flex;
		column-count: 3;
		width: 100%;
		text-align: center;
		place-content: space-evenly;
		grid-column-gap: 2rem;
	}

	.footer_item {
	}

	.header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background: var(--accent1);
		height: 96px;
		max-width: 100%;
		overflow: hidden;
		padding: 0px 4.7%;
		position: sticky;
		top: 0px;
		z-index: 10;
		margin: 0;
	}

	.leftPart {
		display: inline-flex;
		order: 0;
		flex-grow: 0;
		padding: 0;
	}

	.linkContainer {
		padding: 8px;
		color: var(--background);
	}

	.active, .linktext:hover {
		border-bottom: 5px solid var(--accent4) !important;
		transition: ease-in-out .2s;
	}

	.linktext {
		border-bottom: 5px solid transparent;
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: normal;
		font-size: 20px;
		line-height: 20px;
		transition: ease-in-out .2s;
	}

	a {
		text-decoration: none;
	}

	.socials_span {
		display: inline-flex;
		order: 0;
		flex-grow: 0;
		padding: 0;
	}

	.socials_span a {
		padding-right: 6px;
		color: var(--background);
		text-decoration: none;
	}

	.socials_span a iconify-icon {
		transition: ease-in-out .2s;
	}

	/* Makes the "border" appear further away */
	.socials_span a iconify-icon:hover {
		box-shadow: 0 3px var(--accent1),
			0 8px var(--accent4);
		transition: ease-in-out .2s;
	}

  :global(img) {
      transition: all 0.2s;
  }

  :global(img):hover {
      transform: scale(1.04);
			overflow: visible !important;
	}

</style>
