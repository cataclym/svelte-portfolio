<script>
	import '../app.css';
	import navigationState from '../stores/navigationState';
	import { fade } from 'svelte/transition';

	import {
		PUBLIC_INSTAGRAM,
		PUBLIC_LINKEDIN,
		PUBLIC_WHATSAPP,
		PUBLIC_TWITTER
	} from '$env/static/public';

	const navigationTargets = [
		{
			name: 'Illustrations',
			url: '/illustrations'
		},
		{
			name: 'Animations',
			url: '/animations'
		},
		{
			name: 'Photography',
			url: '/photography'
		},
		{
			name: 'Contact',
			url: '/contact'
		}
	];

	$: currentRoute = $page.url.pathname;
	import { page } from '$app/stores';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import PageLoader from '../components/PageLoader.svelte';

	const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);

	beforeNavigate(() => {
		navigationState.set('loading');
	});

	afterNavigate(() => {
		navigationState.set('loaded');
	});
</script>

<svelte:head>
	<meta name="title" content="Natalie">
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

	<link rel="icon" type="image/png" href="/favicon.png">
	<link rel="apple-touch-icon" type="image/png" href="/favicon.png">

	<meta name="theme-color" content="#4D3F6D">

	<title>Natalie - {capitalize($page.url.pathname.replace("/", "") || "Home")}</title>
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
	{#if $navigationState === "loading"}
		<div out:fade={{ delay: 500 }}>
			<PageLoader />
		</div>
	{/if}
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
	<p>Made with ♥️ by Cata</p>
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
        color: var(--font-accent);
    }

    .active, .linktext:hover {
        border-bottom: 5px solid var(--accent4) !important;
        transition: ease-in-out .1s;
    }

    .linktext {
        border-bottom: 5px solid transparent;
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
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
        color: var(--font-accent);
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

    @media only screen and (max-width: 700px) {
        .header {
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        }

        .linktext {
            font-size: large;
        }

        .leftPart {
            max-width: 100%;
            order: 1;
        }

        .header {
            padding: 0;
            height: 64px;
        }

        .linkContainer {
            padding: 0.2rem;
        }

        .socials_span {
            max-width: 100%;
            justify-content: center;
            margin-top: 5px;
        }

        .socials_span a {
            padding: 0 3px 0 3px;
        }
    }

    @media only screen and (max-width: 400px) {
        .linktext {
            font-size: medium;
        }
    }

</style>
